import { Router } from "express";
import { any } from "zod";
import {
  createClientController,
  deleteClientController,
  listClientController,
  updateClientController,
} from "../controllers/client.controller";

export const clientRoutes = Router();

clientRoutes.post("", createClientController);
clientRoutes.get("", listClientController);
clientRoutes.put("/:clientId", updateClientController);
clientRoutes.delete("/:clientId", deleteClientController);
