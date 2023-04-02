import { Request, Response } from "express";
import AppDataSource from "../../data-source";
import { Client } from "../../entities/clients.entity";

export const deleteClientServices = async (clientId: number) => {
  const clientRepository = AppDataSource.getRepository(Client);
  console.log(clientId);
  const client = await clientRepository.findOneBy({ id: clientId });

  const deleted = clientRepository.softDelete(clientId);

  return deleted;
};
