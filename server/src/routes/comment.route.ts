import express from "express"
import { authenticationMiddleware } from "../middlewares/authentication.middleware"
import { createCommentController } from "../controllers/comments/createComment.controller"
import { deleteCommentController } from "../controllers/comments/deleteComment.controller"
import { createCommentReplyController } from "../controllers/comments/createCommentReply.controller"
import { deleteCommentReplyController } from "../controllers/comments/deleteCommentReply.controller"
import { getPostCommentsController } from "../controllers/comments/getPostComments.controller"

const router = express.Router()

router.post("/create-comment/:postId", authenticationMiddleware, createCommentController)
router.delete("/delete-comment/:commentId", authenticationMiddleware, deleteCommentController)
router.post("/create-comment-reply/:commentId/:username", authenticationMiddleware, createCommentReplyController)
router.delete("/delete-comment-reply/:commentReplyId", authenticationMiddleware, deleteCommentReplyController)
router.get("/get-post-comments/:postId", getPostCommentsController)

export default router