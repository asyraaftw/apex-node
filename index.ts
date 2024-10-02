import * as dotenv from "dotenv";
import express from "express";
import { DataSource } from "typeorm";

dotenv.config();

const { db, host, logging, password, sync, portDb, userNameDB } = process.env;

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`👁️ on http://localhost:${port}`);
});

const server = async () => {
  const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "abc123",
    database: "apex-root",
    entities: [__dirname + "/entity/*.js"],
    synchronize: true,
  });

  await AppDataSource.initialize();

  console.log(AppDataSource);
};
