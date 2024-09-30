import express from "express"
import { authenticationMiddleware } from "../middlewares/authentication.middleware"
import { createCommentController } from "../controllers/comments/createComment.controller"

const router = express.Router()

router.post("/create-comment/:postId", authenticationMiddleware, createCommentController)

export default router