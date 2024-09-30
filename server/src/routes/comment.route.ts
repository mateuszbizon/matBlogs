import express from "express"
import { authenticationMiddleware } from "../middlewares/authentication.middleware"
import { createCommentController } from "../controllers/comments/createComment.controller"
import { deleteCommentController } from "../controllers/comments/deleteComment.controller"
import { createCommentReplyController } from "../controllers/comments/createCommentReply.controller"

const router = express.Router()

router.post("/create-comment/:postId", authenticationMiddleware, createCommentController)
router.delete("/delete-comment/:commentId", authenticationMiddleware, deleteCommentController)
router.post("/create-comment-reply/:commentId/:username", authenticationMiddleware, createCommentReplyController)

export default router