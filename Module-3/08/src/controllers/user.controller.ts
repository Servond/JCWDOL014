import { Request, Response, NextFunction } from "express";
import prisma from "../prisma";
import userAction from "../actions/user.action";

export class UserController {
  public createUserController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { username, email, password, firstname, lastname } = req.body;

      const user = await userAction.createUser(
        username,
        email,
        password,
        firstname,
        lastname
      );

      res.status(200).json({
        message: "Create user success",
        data: user,
      });
    } catch (err) {
      next(err);
    }
  };

  public getUsersController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const {
        username,
        firstname,
        lastname,
        page = 1,
        pageSize = 10,
      } = req.query;
      let filter = {};

      if (username) filter = { ...filter, username: { contains: username } };
      if (firstname) filter = { ...filter, firstname: { contains: firstname } };
      if (lastname) filter = { ...filter, lastname: { contains: lastname } };

      const user = await prisma.user.findMany({
        skip: (Number(page) - 1) * Number(pageSize),
        take: Number(pageSize),
        where: {
          AND: [
            {
              ...filter,
            },
            {
              roleId: {
                not: 2,
              },
            },
          ],
        },
      });

      res.status(200).json({
        message: "Create users success",
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
      const { userId } = req.params;
      // const user = await prisma.user.findFirst();

      const user = await userAction.findUserById(Number(userId));

      if (!user) throw new Error("User not found!");

      res.status(200).json({
        message: "Get user success",
        data: user,
      });
    } catch (err) {
      next(err);
    }
  };

  public updateUserController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { userId } = req.params;
      const { firstname, lastname } = req.body;

      const check = await userAction.findUserById(Number(userId));

      if (!check) throw new Error("User not found!");

      let params = {};

      if (firstname) params = { ...params, firstname };
      if (lastname) params = { ...params, lastname };

      const user = await prisma.user.update({
        where: {
          id: Number(userId),
        },
        data: {
          ...params,
        },
      });

      res.status(200).json({
        message: "Update user success",
        data: user,
      });
    } catch (err) {
      next(err);
    }
  };

  public deleteUserController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { userId } = req.params;
      const user = await prisma.user.delete({
        where: {
          id: Number(userId),
        },
      });

      res.status(200).json({
        message: "Delete user success",
        data: user,
      });
    } catch (err) {
      next(err);
    }
  };
}
