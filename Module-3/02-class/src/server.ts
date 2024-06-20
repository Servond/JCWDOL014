import { App } from "./app";
import { ExpensesRoute } from "./routes/expenses.route";

const app = new App([new ExpensesRoute()]);

app.listen();
