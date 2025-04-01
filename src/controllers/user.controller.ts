import { Response } from "express";

import prisma from "../utils/prisma";
import { AuthRequest } from "../types";

export const getAppointmentsByUserToken = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const { userId } = req.user!;

    if (!userId) {
      return res.status(401).json({ message: "Invalid User" });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        Appointments: {
          include: {
            Dentist: true,
          },
        },
      },
    });

    const userAppointments = user?.Appointments;

    res.status(200).json({
      message: "User Found By Id Successfully",
      data: userAppointments,
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateUserByToken = async (req: AuthRequest, res: Response) => {
  try {
    const { userId } = req.user!;
    const data = req.body;

    if (!userId) {
      return res.status(401).json({ message: "Invalid User" });
    }

    const userAppointments = await prisma.user.update({
      where: { id: userId },
      data,
    });

    res.status(200).json({
      message: "User Found By Id Successfully",
      data: { userAppointments },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
