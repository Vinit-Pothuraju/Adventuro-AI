import jwt from "jsonwebtoken";
import { env } from "../config/env";

export const generateToken = (payload: object) => {
  if (!env.JWT_SECRET) {
    throw new Error("JWT_SECRET is missing in environment variables");
  }

  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: "1d"
  });
};
