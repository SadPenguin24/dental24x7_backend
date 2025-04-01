import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import {
  updateAppointmentById,
  createAppointment,
  getAppointmentById,
} from "../controllers/appointment.controller";

const router = Router();

router.get("/:id", authMiddleware, getAppointmentById);
router.post("/create", authMiddleware, createAppointment);
router.patch("/update/:id", authMiddleware, updateAppointmentById);

export default router;
