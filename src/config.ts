import * as dotenv from "dotenv-safe";

dotenv.config();

export const appID = process.env.APP_ID as string;
export const clientID = process.env.CLIENT_ID as string;
export const baseUrl = process.env.BASE_URL as string;
