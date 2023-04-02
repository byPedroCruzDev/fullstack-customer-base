import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts.entity";

export const listClientByIdServices = async (
  clientId: number
): Promise<any> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contacts = await contactRepository.find({
    where: { client: { id: clientId } },
  });
  console.log(contacts);
  return contacts;
};
