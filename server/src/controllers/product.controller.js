import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { Product} from "../models/product.model.js"
import { Review } from "../models/review.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken"
import mongoose, { get } from "mongoose";


const createProduct = asyncHandler(async(req, res) => {
    const Admin = req.body.Admin
    if (Admin) {
                const {Title, CoverImage, Description, Pdf, Audio,Tags} = req.body
            
            
            if ([Title , CoverImage , Description , Pdf,Tags].some((field) => field?.trim() === "")) {
                throw new ApiError(400, "All fields are required")
            }

            const existedProduct = await Product.findOne({
                Title: Title
            })
            console.log(existedProduct,"existing prod")


            if(existedProduct) {
                throw new ApiError(409, "Product with same title already exists")
            }

            const product = await Product.create({
                Title: Title,
                CoverImage: CoverImage,
                Description: Description,
                Pdf: Pdf,
                Audio: Audio,
                Tags: Tags
            })

            const createdProduct = await Product.findById(product._id)
            if (!createdProduct) {
                throw new ApiError(500,"product was not created ")
            }

            return res
            .status(201)
            .json(new ApiResponse(201, product, "Product created successfully"));
    }else {
        throw new ApiError(401, "Unauthorized request!, only admin can create product")
    }
    

})

const updateProduct = asyncHandler(async(req, res) => {
    const Admin = req.body.Admin
    if (Admin) {
        const{Title, CoverImage, Description, Pdf, Audio,Tags,productId} = req.body

        if (!Title || !CoverImage || !Description || !Pdf || !Tags) {
            throw new ApiError(400, "All fields are required ")
        }

        const product = await Product.findOne({
            _id: productId
        })

        if (!product) {
            throw new ApiError(404, "existing Product not found")
        }

        const updatedProduct = await Product.findByIdAndUpdate(
            product._id,{
                $set: {
                    Title: Title,
                    CoverImage: CoverImage,
                    Description: Description,
                    Pdf: Pdf,
                    Audio: Audio,
                    Tags: Tags
                }
            },{new: true})

        if (!updatedProduct) {
            throw new ApiError(500,"Error while updating the product ")
        }

        return res
        .status(200)
        .json(new ApiResponse(200, updatedProduct, "Product updated successfully"));

        
    }else{
        throw new ApiError(401, "Unauthorized request!, only admin can update product")
    }
})


const getProduct = asyncHandler(async(req, res) => {
    const Title = req.body.Title

    if (!Title) {
        throw new ApiError(400, "Title is required")
    }
    const product = await Product.findOne({
        Title: Title
    })
    
    const avgstar = await Review.aggregate([
        {
            $match: { ProductId: product._id.toString() } 
        },
        {
            $group: {
                _id: "$ProductId",
                averageStar: { $avg: "$Star" },  
            }
        }
    ])
    if (!product) {
        throw new ApiError(404, "Product not found")
    }

    return res
    .status(200)
    .json(new ApiResponse(200, {product, avgstar:avgstar[0].averageStar}, "Product fetched successfully"));
})


const getProducts = asyncHandler(async(req, res) => {
    const Title = req.body.Titles
    function parseTitles(input) {
        return input
          .match(/"([^"]+)"/g)     
          ?.map(Title => Title.replace(/"/g, '').trim()) || [];
      }

    const Titles = parseTitles(Title)
    if (!Titles) {
        throw new ApiError(400, "Title is required")
    }

    const products = await Product.find({
        Title: { $in: Titles }
    })

    if (!products) {
        throw new ApiError(404, "Product not found")
    }

    return res
    .status(200)
    .json(new ApiResponse(200, products, "Products fetched successfully"));
})






export {createProduct,
        updateProduct,
        getProduct,
        getProducts,
}