import express from "express";
import { getSignedInUserDataController } from "../controllers/auth/getSignedInUserData.controller";

const router = express.Router()

router.get("/get-signed-in-user-data", getSignedInUserDataController)

export default router