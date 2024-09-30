import express from "express";
import { signUpController } from "../controllers/users/signUp.controller";
import { signInController } from "../controllers/users/signIn.controller";
import { verifyJwtController } from "../controllers/users/verifyJwt.controller";
import { authenticationMiddleware } from "../middlewares/authentication.middleware";
import { updateUserController } from "../controllers/users/updateUser.controller";
import { upload } from "../utils/upload";
import { updateUserProfileController } from "../controllers/users/updateUserProfile.controller";
import { getSingleUserController } from "../controllers/users/getCompleteUser.controller";

const router = express.Router();

router.post("/sign-up", signUpController);
router.post("/sign-in", signInController);
router.get("/verify-jwt", verifyJwtController);
router.patch("/update-user/:userId", authenticationMiddleware, updateUserController)
router.put("/update-user-profile/:userId", authenticationMiddleware, upload.single("image"), updateUserProfileController)
router.get("/get-user/:username", getSingleUserController)

export default router;
