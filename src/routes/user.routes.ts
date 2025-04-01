import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import {
  getAppointmentsByUserToken,
  updateUserByToken,
} from "../controllers/user.controller";

const router = Router();

router.get("/appointments", authMiddleware, getAppointmentsByUserToken);
router.patch("/update", authMiddleware, updateUserByToken);

export default router;
