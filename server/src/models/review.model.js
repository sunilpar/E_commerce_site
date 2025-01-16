import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const reviewSchema = new Schema(
    {
        ProductId:{
            type: String,
            required: true
        },
        UserId:{
            type: String,
            required: true
        },
        UserName:{
            type: String,
            required: true
        },
        UserAvatar:{
            type: String,
            required: true
        },
        Review:{
            type: String,
            required: true
        },
        Star:{
            type:Number,
        }
    }, 
    {
        timestamps: true
    }
)

reviewSchema.plugin(mongooseAggregatePaginate)

export const Review = mongoose.model("Review", reviewSchema);