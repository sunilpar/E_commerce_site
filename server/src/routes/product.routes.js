import { Router } from "express";
import { createProduct,
         updateProduct,
         getProduct,
         getProducts,
         searchSuggestion,
         searchPage,
         getProductsWithId
 } from "../controllers/product.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router()



router.route("/get-product").post(getProduct)
router.route("/get-products").post(getProducts)
router.route("/get-Byids").post(getProductsWithId)
router.route("/get-suggestions").post(searchSuggestion)
router.route("/get-searchpage").post(searchPage)
 
//admin only routes
router.route("/create-product").post(verifyJWT,createProduct)
router.route("/update-product").post(verifyJWT,updateProduct)




export default router