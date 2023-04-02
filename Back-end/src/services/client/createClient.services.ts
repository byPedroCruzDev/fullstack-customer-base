import { Client } from "../../entities/clients.entity";
import AppDataSource from "../../data-source";
import { IClientRequest } from "../../interfaces/index";

export const createClientServices = async (
  clientData: IClientRequest
): Promise<any> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const createClient = clientRepository.create(clientData);

  const client = await clientRepository.save(createClient);

  return client;
};
