import { Router } from "express";
import { IRoutes } from "../interfaces/routes.interface";
import { StudentsController } from "../controllers/students.controller";

// /api/expenses
export class StudentsRoute implements IRoutes {
  public router: Router = Router();
  public students = new StudentsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/students", this.students.getStudentsController);
  }
}
