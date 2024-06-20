import { Request, Response, NextFunction } from "express";
import axios from "axios";
import { IExpenses } from "../interfaces/expenses.interface";
import { JSON_SERVER_URL } from "../config";

export class ExpensesController {
  public getExpensesController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { data } = await axios.get(`${JSON_SERVER_URL}/expenses`);
      res.status(200).json({
        message: "Get Expenses Success",
        data,
      });
    } catch (err) {
      next(err);
    }
  };

  public getExpenseController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { expenseId } = req.params;
      const { data } = await axios.get(
        `${JSON_SERVER_URL}/expenses?id=${expenseId}`
      );
      res.status(200).json({
        message: "Get Expense Success",
        data,
      });
    } catch (err) {
      next(err);
    }
  };

  public createExpenseController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { title, nominal, type, category }: IExpenses = req.body;
      const { data } = await axios.post(`${JSON_SERVER_URL}/expenses`, {
        title,
        nominal,
        type,
        category,
        date: new Date(),
      });
      res.status(200).json({
        message: "Create Expense Success",
        data,
      });
    } catch (err) {
      next(err);
    }
  };
}
