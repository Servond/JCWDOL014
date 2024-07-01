import { Router } from "express";
import { IRoutes } from "../interfaces/routes.interface";
import { UserController } from "../controllers/user.controller";

export class UserRoute implements IRoutes {
  public router: Router = Router();
  public user = new UserController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/users", this.user.getUserController);
    this.router.post("/users", this.user.createUserController);
  }
}
