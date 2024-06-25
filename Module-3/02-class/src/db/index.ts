import mysql from "mysql2";
import { DB_HOST, DB_NAME, DB_USER, DB_PASS } from "../config";

export default mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
});
