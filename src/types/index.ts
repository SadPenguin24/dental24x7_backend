import { Request } from "express";

export interface UserInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  birthday: string;
}
export interface DentistInput {
  bio: string;
  name: string;
  specialty: string;
  image: string;
}
export interface AppointmentInput {
  dentistId: string;
  userId: string;
  status: string;
  service: string;
  date: string;
  time: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface JwtPayload {
  userId: string;
}

export interface AuthRequest extends Request {
  user?: {
    userId: string;
  };
}
