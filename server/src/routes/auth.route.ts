import express from "express";
import { getSignedInUserDataController } from "../controllers/auth/getSignedInUserData.controller";
import { signOutController } from "../controllers/auth/signOut.controller";

const router = express.Router()

router.get("/get-signed-in-user-data", getSignedInUserDataController)
router.get("/sign-out", signOutController)

export default router