import AppDataSource from "../../data-source";
import { Client } from "../../entities/clients.entity";
import { Contact } from "../../entities/contacts.entity";

import { UpdateClientDTO, UpdateContactBody } from "../../interfaces";

export const updateContactServices = async (
  clientId: number,
  contactId: number,
  data: any
) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const clientRepository = AppDataSource.getRepository(Client);

  const contact = await contactRepository
    .createQueryBuilder("contact")
    .innerJoinAndSelect("contact.client", "client")
    .where("contact.id = :contactId AND client.id = :clientId", {
      contactId,
      clientId,
    })
    .getOne();
  if (!contact) {
    return "Contact not found";
  }

  contact.fullName = data.fullName;
  contact.email = data.email;
  contact.phone = data.phone;
  const updatedContact = await contactRepository.save(contact);
  console.log(updatedContact);
  return updatedContact;
};
