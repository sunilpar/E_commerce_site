import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const productSchema = new Schema(
    {
        Title:{
            type: String,
            required: true,
            trim: true, 
            index: true
        },
        CoverImage:{
            type: String, //public url
            required: true,
        },
        Description:{
            type: String,
            required: true,
        },
        Pdf:{
            type:Number,
            required: true,
        },
        Audio:{
            type:Number
        },
        Star:{
            type: Schema.Types.ObjectId,
            ref:"Review"
        },
        Tags:{
            type:String,
            required: true
        }
    }, 
    {
        timestamps: true
    }
)

productSchema.plugin(mongooseAggregatePaginate)

export const Product = mongoose.model("Product", productSchema);