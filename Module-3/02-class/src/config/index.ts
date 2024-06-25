import { config } from "dotenv";
config();

export const { PORT, JSON_SERVER_URL, DB_HOST, DB_NAME, DB_USER, DB_PASS } =
  process.env;
