import exp from "constants";
import express, { Application } from "express";
import { clientRoutes } from "./routes/clients.routes";
import { contactRoutes } from "./routes/contacts.routes";

const app: Application = express();
app.use(express.json());
app.use("/clients", clientRoutes, contactRoutes);

export default app;
