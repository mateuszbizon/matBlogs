import express from "express"
import { createPostController } from "../controllers/posts/createPost.controller"
import { upload } from "../utils/upload"
import { authenticationMiddleware } from "../middlewares/authentication.middleware"
import { updatePostController } from "../controllers/posts/updatePost.controller"

const router = express.Router()

router.post("/create-post", authenticationMiddleware, upload.single("image"), createPostController)
router.put("/update-post/:postId", authenticationMiddleware, upload.single("image"), updatePostController)

export default router