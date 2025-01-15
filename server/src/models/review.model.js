import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const reviewSchema = new Schema(
    {
        User:{
            type: Schema.Types.ObjectId,
            ref:"User",
            required: true
        },
        Product:{
            type: Schema.Types.ObjectId,
            ref:"Product",
            required: true
        },
        review:{
            type: String,
            required: true
        },
        Star:{
            type:Double,
        }
    }, 
    {
        timestamps: true
    }
)

reviewSchema.plugin(mongooseAggregatePaginate)

export const Review = mongoose.model("Review", reviewSchema);