import express from "express";
import { signUpController } from "../controllers/users/signUp.controller";
import { signInController } from "../controllers/users/signIn.controller";
import { authenticationMiddleware } from "../middlewares/authentication.middleware";
import { updateUserController } from "../controllers/users/updateUser.controller";
import { upload } from "../utils/upload";
import { updateUserProfileController } from "../controllers/users/updateUserProfile.controller";
import { getSingleUserController } from "../controllers/users/getSingleUser.controller";
import { searchUsersController } from "../controllers/users/searchUsers.controller";

const router = express.Router();

router.post("/sign-up", signUpController);
router.post("/sign-in", signInController);
router.patch("/update-user", authenticationMiddleware, updateUserController)
router.put("/update-user-profile", authenticationMiddleware, upload.single("image"), updateUserProfileController)
router.get("/get-user/:username", getSingleUserController)
router.get("/search-users", searchUsersController)

export default router;
