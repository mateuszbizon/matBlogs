import express from "express"
import { authenticationMiddleware } from "../middlewares/authentication.middleware"
import { createCommentController } from "../controllers/comments/createComment.controller"
import { deleteCommentController } from "../controllers/comments/deleteComment.controller"

const router = express.Router()

router.post("/create-comment/:postId", authenticationMiddleware, createCommentController)
router.delete("/delete-comment/:commentId", authenticationMiddleware, deleteCommentController)

export default router