import express from "express";
import { signUpController } from "../controllers/user.controller";

const router = express.Router()

router.post("/sign-up", signUpController)

export default router