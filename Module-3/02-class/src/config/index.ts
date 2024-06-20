import { config } from "dotenv";
config();

export const { PORT, JSON_SERVER_URL } = process.env;
