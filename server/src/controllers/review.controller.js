import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {Review} from "../models/review.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";




const createReview = asyncHandler(async(req, res) => {
                const {ProductId, star, Comment} = req.body
            
            
            // if (!ProductId) {
            //     throw new ApiError(400, "productId is required")
            // }

            // const existedReview = await Review.findOne({
            //     $and: [{ProductId: ProductId},{UserId: req.user._id}]
            // })
            // // console.log(existedReview,"") 


            // if(existedReview) {
            //     throw new ApiError(409, "Review already exist form the same user in this product")
            // }

            // const username = await User.aggregate([
            //      {
            //         $lookup: {
            //             from: "users",
            //             localField: "userId",
            //             foreignField: "_id",
            //             as: "UserName"
            //         }
            //     },
            //     {
            //         $match: {
            //             _id: req.user._id
            //         }
            //     },{
            //         $project: {
            //             FullName:1,
            //             Avatar:1,
            //             _id:0
            //         }
            //     } 
            // ])
            // const FullName = username[0].FullName
            // const UserAvatar = username[0].Avatar
            

            // const review = await Review.create({
            //     ProductId: ProductId,
            //     UserId: req.user._id,
            //     UserName: FullName,
            //     UserAvatar: UserAvatar,
            //     Review: Comment,
            //     Star: star
            // })

            // const createdReview = await Review.findById(review._id)
            // if (!createdReview) {
            //     throw new ApiError(500,"review was not created ")
            // }

            return res
            .status(201)
            .json(new ApiResponse(201,req.body , "review was created successfully"));//change

    })


const updateReview = asyncHandler(async(req, res) => {
    const{ProductId, Comment, Star} = req.body
            if (!ProductId || !Comment || !Star) {
                throw new ApiError(400, "All fields are required to update review ")
            }
    
            const review = await Review.findOne({
                $and: [{ProductId: ProductId},{UserId: req.user._id}]
            })
    
            if (!review) {
                throw new ApiError(404, "existing Product not found")
            }
    
            const updatedReview = await Review.findByIdAndUpdate(
                review._id,{
                    $set: {
                        Review: Comment,
                        star: Star,
                    }
                },{new: true})
    
            if (!updatedReview) {
                throw new ApiError(500,"Error while updating the review ")
            }
    
            return res
            .status(200)
            .json(new ApiResponse(200, updatedReview, "review was updated successfully"));
})

const getReviews = asyncHandler(async(req, res) => {
    const {ProductId} = req.body

    if (!ProductId) {
        throw new ApiError(400, "productId is required")
    }

    const reviews = await Review.find({
        ProductId: { $in: ProductId }
    })

    if (!reviews) {
        throw new ApiError(404, "reviews not found")
    }

    return res
    .status(200)
    .json(new ApiResponse(200, reviews, "reviews fetched successfully"));
})






export {createReview,
        updateReview,
        getReviews
}