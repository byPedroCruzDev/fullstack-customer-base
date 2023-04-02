import { Client } from "../../entities/clients.entity";
import AppDataSource from "../../data-source";
import { IClientRequest } from "../../interfaces/index";
import { Contact } from "../../entities/contacts.entity";

export const createContactForClientServices = async (
  clientId: number,
  contactData: IClientRequest
) => {
  const clientRepository = AppDataSource.getRepository(Client);
  const contactRepository = AppDataSource.getRepository(Contact);

  const client = await clientRepository.findOneBy({ id: clientId });
  console.log(client);
  if (!client) {
    throw new Error("Client not found");
  }

  const newContact = contactRepository.create({
    ...contactData,
    client,
  });
  console.log(newContact);

  const contactSaved = await contactRepository.save(newContact);

  return contactSaved;
};
