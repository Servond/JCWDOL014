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
    this.router.get("/users", this.user.getUsersController);
    this.router.get("/users/:userId", this.user.getUserController);
    this.router.post("/users", this.user.createUserController);
    this.router.patch("/users/:userId", this.user.updateUserController);
    this.router.delete("/users/:userId", this.user.deleteUserController);
  }
}
