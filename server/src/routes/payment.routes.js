import { Router } from "express";
import { khaltiPayment } from "../controllers/payment.controller.js";



const router = Router()



router.route("/khalti/initiate").post(khaltiPayment)

export default router