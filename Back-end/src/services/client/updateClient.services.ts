import AppDataSource from "../../data-source";
import { Client } from "../../entities/clients.entity";

import { UpdateClientDTO } from "../../interfaces";

export const updateClientServices = async (
  clientId: number,
  data: UpdateClientDTO
) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({ id: clientId });

  if (!client) {
    throw new Error("Client not found");
  }

  client.fullName = data.fullName;
  client.email = data.email;
  client.phone = data.phone;
  client.registrationDate = data.registrationDate;
  const savedClient = await clientRepository.save(client);

  return savedClient;
};
