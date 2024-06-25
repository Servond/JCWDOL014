import { App } from "./app";
import db from "./db";

import { ExpensesRoute } from "./routes/expenses.route";
import { StudentsRoute } from "./routes/students.route";

const app = new App([new ExpensesRoute(), new StudentsRoute()]);

async function initializeDB() {
  try {
  } catch (err) {
    return console.log(err);
  }
}

db.getConnection((err, connection) => {
  if (err) return console.log(err.message);

  console.log("database connect successfully");
});

app.listen();
