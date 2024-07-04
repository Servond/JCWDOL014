import { Router } from "express";
import { IRoutes } from "../interfaces/routes.interface";
import { UserController } from "../controllers/user.controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class UserRoute implements IRoutes {
  public router: Router = Router();
  private user = new UserController();
  private guard = new AuthMiddleware();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/users", this.user.getUsersController);
    this.router.get(
      "/users/profile",
      this.guard.verifyToken,
      this.user.getUserController
    );
    this.router.post("/register", this.user.createUserController);
    this.router.post("/login", this.user.loginController);
    this.router.patch("/users/:userId", this.user.updateUserController);
    this.router.delete("/users/:userId", this.user.deleteUserController);
  }
}
