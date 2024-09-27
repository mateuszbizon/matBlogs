import express from "express"
import { createPostController } from "../controllers/posts/createPost.controller"
import { upload } from "../utils/upload"
import { authenticationMiddleware } from "../middlewares/authentication.middleware"

const router = express.Router()

router.post("/create-post", authenticationMiddleware, upload.single("image"), createPostController)

export default router