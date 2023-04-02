import { Router } from "express";
import { updateClientController } from "../controllers/client.controller";
import {
  createContactForClientController,
  deleteContactController,
  listContactByIdController,
  updateContactController,
} from "../controllers/contacts.controller";

export const contactRoutes = Router();

contactRoutes.put("/:clientId/contacts/:contactId", updateContactController);

contactRoutes.post("/:clientId/contacts", createContactForClientController);
contactRoutes.get("/:clientId/contacts", listContactByIdController);
contactRoutes.delete("/:clientId/contacts/:contactId", deleteContactController);
