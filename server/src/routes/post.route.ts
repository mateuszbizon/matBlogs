import express from "express"
import { createPostController } from "../controllers/posts/createPost.controller"
import { upload } from "../utils/upload"

const router = express.Router()

router.post("/create-post", upload.single("image"), createPostController)

export default router