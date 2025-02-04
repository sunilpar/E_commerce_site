import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "../index";
import Service from "../../appwrite/config";

export default function ProductForm({product}) {
    const { register, handleSubmit} = useForm({
        defaultValues: {
            Title: product.Title ,
            CoverImage: product.CoverImage,
            Description: product.Description,
            Pdf:product.Pdf,
            Audio:product.Audio,
            Tags:product.Tags,
        },
    });    
    const submit = async (data) => {
            const dbPost = await Service.updateProduct(product._id, {...data});
            if (dbPost.statusCode === 200) {
                console.log("Updated Product:", dbPost);
            }
      
    };
    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap text-iphone-white">
            <div className="w-2/3 px-2 ">
                <Input
                    label="Title"
                    placeholder="Title of book"
                    className="mb-4 "
                    {...register("Title", { required: true })}
                />
                  
                <Input
                    label="Description of the book :"
                    placeholder="Description of book"
                    type="textarea"
                    className="mb-4 w-[500px] h-[500px] textarea-autosize  "
                    {...register("Description", { required: true })}
                />
                <Input
                    label="Tags"
                    placeholder="tags of book"
                    className="mb-4"
                    {...register("Tags", { required: true })}
                />
                  
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="cover Image :"
                    type="text"
                    className="mb-4"
                    {...register("CoverImage", { required: true })}
                />
                <Input
                    label="Pdf price:"
                    type="number"
                    className="mb-4"
                    {...register("Pdf", { required: true })}
                />
                <Input
                    label="Audio price:"
                    type="number"
                    className="mb-4"
                    {...register("Audio", { required: (product.Audio!==0) })}
                />
                    <div className="w-full mb-4">
                        <img
                            src={product.CoverImage}
                            className="rounded-lg"
                        />
                    </div>
                <Button type="submit" bgColor="bg-skin-green" className="w-full">
                    update
                </Button>
            </div>
        </form>
    );
}
