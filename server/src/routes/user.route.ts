import express from "express";
import { signUpController } from "../controllers/users/signUp.controller";
import { signInController } from "../controllers/users/signIn.controller";
import { verifyJwtController } from "../controllers/users/verifyJwt.controller";

const router = express.Router();

router.post("/sign-up", signUpController);
router.post("/sign-in", signInController);
router.get("/verify-jwt", verifyJwtController);

export default router;
