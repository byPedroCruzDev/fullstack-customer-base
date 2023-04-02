import { Request, Response } from "express";
import AppDataSource from "../../data-source";

import { Contact } from "../../entities/contacts.entity";

export const deleteContactsServices = async (
  clientId: number,
  contactId: number
) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOneBy({
    id: contactId,
  });
  if (!contact) {
    return "contact not found";
  }
  contact.deletedAt = new Date();
  const deleted = contactRepository.softDelete(contactId);

  return deleted;
};
