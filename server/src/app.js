import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(cookieParser())


//routes import 
import userRouter from "./routes/user.routes.js"
import productRouter from "./routes/product.routes.js"
import reviewRouter from "./routes/review.routes.js"
import paymentRouter from "./routes/payment.routes.js"






//route declarations
app.use("/api/user", userRouter)
app.use("/api/product", productRouter)
app.use("/api/review", reviewRouter)
app.use("/api/payment", paymentRouter)






export { app }