import { Request, Response } from "express";
import { IClientRequest } from "../interfaces";
import { createContactForClientServices } from "../services/contacts/createContacts.services";
import { deleteContactsServices } from "../services/contacts/deleteContacts.services";
import { listClientByIdServices } from "../services/contacts/listContacts.services";
import { updateContactServices } from "../services/contacts/updateContact.services";

export const listContactByIdController = async (
  req: Request,
  res: Response
) => {
  const clientId: any = req.params.clientId;

  try {
    const clients = await listClientByIdServices(clientId);
    return res.status(200).json(clients);
  } catch {
    return res.status(404).json({ message: "Contact not found" });
  }
};

export const createContactForClientController = async (
  req: Request,
  res: Response
) => {
  const clientId: any = parseInt(req.params.clientId);
  const contactData: IClientRequest = req.body;
  try {
    const newContact = await createContactForClientServices(
      clientId,
      contactData
    );
    return res.status(201).json(newContact);
  } catch {
    return res.status(404).json({ message: "Contact not found" });
  }
};
export const updateContactController = async (req: Request, res: Response) => {
  const clientId: any = parseInt(req.params.clientId);
  const contactId: any = parseInt(req.params.contactId);
  try {
    const { fullName, email, phone } = req.body;
    const updateContact = await updateContactServices(clientId, contactId, {
      fullName,
      email,
      phone,
    });

    return res.status(201).json(updateContact);
  } catch {
    res.status(404).json({ message: "Contact not found" });
  }
};

export const deleteContactController = async (req: Request, res: Response) => {
  const clientId: any = parseInt(req.params.clientId);
  const contactId: any = parseInt(req.params.contactId);
  console.log(typeof clientId);
  try {
    const deleteClient = await deleteContactsServices(clientId, contactId);
    return res.status(204).send();
  } catch {
    return res.status(404).json({ message: "Contact not found" });
  }
};
