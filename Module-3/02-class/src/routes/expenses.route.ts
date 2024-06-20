import { Router } from "express";
import { IRoutes } from "../interfaces/routes.interface";

import { ExpensesController } from "../controllers/expenses.controller";

// /api/expenses
export class ExpensesRoute implements IRoutes {
  public router: Router = Router();
  public expenses = new ExpensesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/expenses", this.expenses.getExpensesController);
    this.router.get("/expenses/:expenseId", this.expenses.getExpenseController);
    this.router.post("/expenses", this.expenses.createExpenseController);
  }
}
