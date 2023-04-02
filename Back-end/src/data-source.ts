import "dotenv/config";
import { type } from "os";
import "dotenv/config";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { Client } from "./entities/clients.entity";
import { Contact } from "./entities/contacts.entity";
import { CreateTable1679955772125 } from "./migrations/1679955772125-CreateTable";
import { deleteColumn1680227074108 } from "./migrations/1680227074108-deleteColumn";
const dataSourceConfig = (): DataSourceOptions => {
  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!dbUrl) {
    throw new Error("Env var DATABASE_URL does not exists");
  }
  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: ["src/entities/*.ts"],
    };
  }
  return {
    type: "postgres",
    url: dbUrl,
    synchronize: false,
    logging: true,
    migrations: [CreateTable1679955772125, deleteColumn1680227074108],
    entities: [Client, Contact],
  };
};

const AppDataSource = new DataSource(dataSourceConfig());

export default AppDataSource;
