import { Request, Response } from "express";
import { IClientRequest } from "../interfaces";
import { createClientServices } from "../services/client/createClient.services";
import { deleteClientServices } from "../services/client/deleClient.services";
import { listClientServices } from "../services/client/listClient.services";
import { updateClientServices } from "../services/client/updateClient.services";

export const createClientController = async (req: Request, res: Response) => {
  const clientData: IClientRequest = req.body;
  try {
    const newClient = await createClientServices(clientData);
    return res.status(201).json(newClient);
  } catch (error) {
    throw new Error("failed to create client");
  }
};

export const listClientController = async (req: Request, res: Response) => {
  const clients = await listClientServices();
  return res.status(200).json(clients);
};
export const updateClientController = async (req: Request, res: Response) => {
  const clientId: any = parseInt(req.params.clientId);

  const { fullName, email, phone, registrationDate } = req.body;
  const deleted = req.body.deleted;
  try {
    const updateClient = await updateClientServices(clientId, {
      fullName,
      email,
      phone,
      registrationDate,
    });
    return res.status(201).json(updateClient);
  } catch {
    res.status(404).json({ message: "Client not found" });
  }
};

export const deleteClientController = async (req: Request, res: Response) => {
  const clientId: any = parseInt(req.params.clientId);

  try {
    const deleteClient = await deleteClientServices(clientId);
    return res.status(204).send();
  } catch {
    return res.status(404).json({ message: "Client not found" });
  }
};
