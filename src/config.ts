import dotenv from "dotenv";
dotenv.config();

type Config = {
  db: DBConfig;
  api: APIConfig;
};

type APIConfig = {
  port: number;
  filepathRoot: string;
};

type DBConfig = {
  url: string | undefined;
};

export const config: Config = {
  api: {
    port: Number(process.env.PORT) || 8080,
    filepathRoot: "./src/assets",
  },
  db: {
    url: process.env.DATABASE_URL,
  },
};