import { Request, Response, NextFunction } from "express";
import { IStudents } from "../interfaces/students.interface";
import { QueryError } from "mysql2";

import db from "../db";

export class StudentsAction {
  public getStudents = async () => {
    try {
      const data = db.query(
        "select * from students",
        (err: QueryError, result: IStudents[]) => {
          if (err) throw new Error(err.message);
          return result;
        }
      );
      console.log(data);
    } catch (err) {
      throw err;
    }
  };
}
