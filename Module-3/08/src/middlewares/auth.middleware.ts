import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { User } from "../types/express";

export class AuthMiddleware {
  verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.header("Authorization")?.replace("Bearer ", "");

      if (!token) throw new Error("Missing Token");

      const isToken = verify(token, String(process.env.API_KEY));
      if (!isToken) throw new Error("Unauthorized");

      req.user = isToken as User;

      next();
    } catch (err) {
      next(err);
    }
  };
}
