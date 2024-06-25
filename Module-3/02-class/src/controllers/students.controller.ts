import { Request, Response, NextFunction } from "express";
import db from "../db";
import { QueryError } from "mysql2";
import { IStudents } from "../interfaces/students.interface";

import { StudentsAction } from "../actions/students.action";

export class StudentsController {
  public getStudentsController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const studentAction = new StudentsAction();
      db.query(
        "select * from students",
        (err: QueryError, result: IStudents[]) => {
          if (err) throw new Error(err.message);
          res.status(200).json({
            message: "Get students success",
            data: result,
          });
        }
      );

      //   res.status(200).json({
      //     message: "Get students success",
      //     data,
      //   });
    } catch (err) {
      next(err);
    }
  };
}
