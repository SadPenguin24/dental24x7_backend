import { Request, Response } from "express";
import prisma from "../utils/prisma";
import { AuthRequest, DentistInput } from "../types";

export const createDentist = async (req: Request, res: Response) => {
  try {
    const { name, bio, specialty, image }: DentistInput = req.body;
    const existingDentist = await prisma.dentist.findUnique({
      where: { name },
    });

    if (existingDentist) {
      return res.status(400).json({ message: "Dentist already exists" });
    }

    const createdDentist = await prisma.dentist.create({
      data: {
        name,
        bio,
        specialty,
        image,
      },
    });

    res.status(201).json({
      message: "Dentist Created Successfully",
      data: createdDentist,
    });
  } catch (error) {
    console.error("Creation error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getDentistById = async (req: AuthRequest, res: Response) => {
  try {
    const { userId } = req.user!;
    const { id } = req.params;

    if (!userId) {
      return res.status(401).json({ message: "Invalid User" });
    }

    const dentist = await prisma.dentist.findUnique({
      where: { id },
      include: {
        Appointments: {
          include: {
            User: true,
          },
        },
      },
    });

    res.status(200).json({
      message: "Dentist Found By Id Successfully",
      data: dentist,
    });
  } catch (error) {
    console.error("get by id error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getDentists = async (req: Request, res: Response) => {
  try {
    const dentists = await prisma.dentist.findMany({});

    res.status(200).json({
      message: "Dentists Found Successfully",
      data: dentists,
    });
  } catch (error) {
    console.error("get by id error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// we don't need to update or delete dentists
// as they are static data and only there
// for technical exam purposes
