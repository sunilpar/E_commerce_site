import React, { useCallback,useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "../index";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProductForm({ product}) {
    const { register, handleSubmit} = useForm({
        defaultValues: {
            Product_Title: product?.Product_Title || "",
            Description: product?.Description || "",
            Book_Type: product?.Book_Type || true,
            Price:product?.Price || 0,
            Tags:product?.Tags || [],
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    
    const submit = async (data) => {
        
    
       
        // function stringToArray(input) {
        //     return input ? input.match(/#[^\s#]+(?:\s[^\s#]+)*/g) || [] : [];
        // }
    
       
        // const updatedTags = stringToArray(data.Tags);
        // data.Tags = updatedTags; 
    
        
    
        if (product) {
            const file = data.image?.[0] ? await appwriteService.uploadFile(data.image[0]) : null;
    
            if (file) {
                appwriteService.deleteFile(product.Cover_Img);
            }
    
            const dbPost = await appwriteService.updateProduct(product.$id, {
                ...data,
                Cover_Img: file ? file.$id : undefined,
                Price: parseFloat(data.Price),
            });
    
            if (dbPost) {
                console.log("Updated Product:", dbPost);
            }
        } else {
            const file = await appwriteService.uploadFile(data.image?.[0]);
            if (file) {
                data.Cover_Img = file.$id;
                const dbPost = await appwriteService.createProduct({
                    ...data,
                    Price: parseFloat(data.Price),
                });
    
                // console.log("Created Product Data Sent to Appwrite:", data); 
                // console.log("Created Product Response:", dbPost); 
    
                if (dbPost) {
                    alert("Product created successfully");
                }
            }
        }
    };
    


    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2 ">
                <Input
                    label="Product_Title :"
                    placeholder="Title of book"
                    className="mb-4 "
                    {...register("Product_Title", { required: !product })}
                />
                  
                <Input
                    label="Description of the book :"
                    placeholder="Description of book"
                    className="mb-4 w-[500px] h-[500px] textarea-autosize  "
                    {...register("Description", { required: !product })}
                />
                <Input
                    label="tags: Todo make it into diff item in array"
                    placeholder="tags of book"
                    className="mb-4"
                    {...register("Tags")}
                />
                  
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="cover Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !product })}
                />
                <Input
                    label="price :"
                    type="number"
                    className="mb-4"
                    {...register("Price", { required: !product })}
                />
                {product && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(product.Cover_Img)}
                            alt={product.Product_Title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Button type="submit" bgColor={product ? "bg-green-500" : undefined} className="w-full">
                    {product ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}
