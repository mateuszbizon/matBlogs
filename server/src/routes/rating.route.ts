import express from "express"
import { authenticationMiddleware } from "../middlewares/authentication.middleware"
import { ratePostController } from "../controllers/ratings/ratePost.controller"

const router = express.Router()

router.put("/rate-post/:postId", authenticationMiddleware, ratePostController)

export default router