import { Router } from "express";
import { createReview,
         updateReview,
         getReviews} from "../controllers/review.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router()


router.route("/post-review").post(verifyJWT,createReview)
router.route("/update-review").patch(verifyJWT,updateReview)
router.route("/get-reviews").post(verifyJWT,getReviews)





export default router