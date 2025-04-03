import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import dentistRoutes from "./routes/dentist.routes";
import appointmentRoutes from "./routes/appointment.routes";
import userRoutes from "./routes/user.routes";
import { rateLimiterUsingThirdParty } from "./middleware/rateLimiter.middleware";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(rateLimiterUsingThirdParty);

app.use("/api/auth", authRoutes);
app.use("/api/dentist", dentistRoutes);
app.use("/api/appointment", appointmentRoutes);
app.use("/api/user", userRoutes);
app.use("/health-check", () => console.log("Congrats, I am working"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
