import express from "express"
import { createPostController } from "../controllers/posts/createPost.controller"
import { upload } from "../utils/upload"
import { authenticationMiddleware } from "../middlewares/authentication.middleware"
import { updatePostController } from "../controllers/posts/updatePost.controller"
import { deletePostController } from "../controllers/posts/deletePost.controller"
import { getSinglePostController } from "../controllers/posts/getSinglePost.controller"

const router = express.Router()

router.post("/create-post", authenticationMiddleware, upload.single("image"), createPostController)
router.patch("/update-post/:postId", authenticationMiddleware, upload.single("image"), updatePostController)
router.delete("/delete-post/:postId", authenticationMiddleware, deletePostController)
router.get("/get-post/:slug", getSinglePostController)

export default router