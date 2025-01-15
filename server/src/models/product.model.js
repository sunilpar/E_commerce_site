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
        Pdf:{
            type:Double ,
            required: true,
        },
        Audio:{
            type:Double
        },
        Star:{
            type: Schema.Types.ObjectId,
            ref:"Review"
        }
    }, 
    {
        timestamps: true
    }
)

productSchema.plugin(mongooseAggregatePaginate)

export const Product = mongoose.model("Product", productSchema);