import { Request, Response } from "express";
import prisma from "../utils/prisma";
import { AppointmentInput, AuthRequest } from "../types";

export const createAppointment = async (req: AuthRequest, res: Response) => {
  try {
    const { dentistId, date, time, service } = req.body;
    const { userId } = req.user!;
    const status = "Booked";

    if (!userId) {
      return res.status(401).json({ message: "Invalid User" });
    }

    const data: AppointmentInput = {
      dentistId,
      userId,
      status,
      date,
      time,
      service,
    };

    const createdAppointment = await prisma.appointment.create({
      data,
    });

    res.status(201).json({
      message: "Created Appointment Successfully",
      data: createdAppointment,
    });
  } catch (error) {
    console.error("Creation error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAppointmentById = async (req: AuthRequest, res: Response) => {
  try {
    const { userId } = req.user!;
    const { id } = req.params;

    if (!userId) {
      return res.status(401).json({ message: "Invalid User" });
    }

    const appointment = await prisma.appointment.findUnique({
      where: { id },
    });

    if (!appointment) {
      return res.status(401).json({ message: "No Appointment was found" });
    }

    res.status(200).json({
      message: "Appointment Found By Id Successfully",
      data: appointment,
    });
  } catch (error) {
    console.error("get by id error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
export const updateAppointmentById = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const { userId } = req.user!;
    const { id } = req.params;
    const { date, time, status } = req.body;
    let data = {};

    if (status == "Rescheduled") {
      data = {
        date,
        time,
        status: "Rescheduled",
      };
    } else {
      data = {
        status,
      };
    }

    if (!userId) {
      return res.status(401).json({ message: "Invalid User" });
    }

    const appointment = await prisma.appointment.update({
      where: { id },
      data,
    });

    if (!appointment) {
      return res.status(401).json({ message: "No Appointment was found" });
    }

    res.status(200).json({
      message: "Appointment Cancelled Successfully",
      data: appointment,
    });
  } catch (error) {
    console.error("Appointment cancel error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
