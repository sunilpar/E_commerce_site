import { Router } from "express";
import { createProduct,
         updateProduct,
         getProduct,
         getProducts
 } from "../controllers/product.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router()



router.route("/get-product").get(getProduct)
router.route("/get-products").get(getProducts)
 
//admin only routes
router.route("/create-product").post(verifyJWT,createProduct)
router.route("/update-product").post(verifyJWT,updateProduct)




export default router