import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import {
  createDentist,
  getDentistById,
  getDentists,
} from "../controllers/dentist.controller";

const router = Router();

router.get("/", getDentists);
router.get("/:id", getDentistById);
router.post("/create", authMiddleware, createDentist);

export default router;
