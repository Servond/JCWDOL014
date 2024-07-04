import express, { Application, Request, Response, NextFunction } from "express";
import { IRoutes } from "./interfaces/routes.interface";
import { config } from "dotenv";
config();

export class App {
  public app: Application;
  public port: number;

  constructor(routes: IRoutes[]) {
    this.app = express();
    this.port = 8080;

    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeErrorMiddlewares();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server started on port ${this.port}`);
    });
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
  }

  private initializeRoutes(routes: IRoutes[]) {
    routes.forEach((route) => {
      this.app.use("/api", route.router);
    });
  }

  private initializeErrorMiddlewares() {
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        console.log(err.message);
        res.status(500).send(err.message);
      }
    );
  }
}
