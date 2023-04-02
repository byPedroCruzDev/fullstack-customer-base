import { Request, Response } from "express";
import AppDataSource from "../../data-source";
import { Client } from "../../entities/clients.entity";

export const listClientServices = async (): Promise<any> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.find();

  return client;
};
