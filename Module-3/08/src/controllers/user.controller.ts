import { Request, Response, NextFunction } from "express";
import prisma from "../prisma";

export class UserController {
  public createUserController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { username, email, password, firstname, lastname } = req.body;

      const user = await prisma.user.create({
        data: {
          username,
          email,
          password,
          firstname,
          lastname,
          roleId: 1,
        },
      });

      res.status(200).json({
        message: "Create user success",
        data: user,
      });
    } catch (err) {
      next(err);
    }
  };

  public getUserController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const user = await prisma.user.findMany();

      res.status(200).json({
        message: "Create user success",
        data: user,
      });
    } catch (err) {
      next(err);
    }
  };
}
