import { Contact } from "../entities/contacts.entity";
export interface IClientRequest {
  fullName: string;
  email: string;
  phone: string;
  registrationDate: Date;
  deletedAt?: Date;
  contacts?: Contact[];
}
export interface UpdateClientDTO {
  fullName: string;
  email: string;
  phone: string;
  registrationDate: Date;
  deletedAt?: Date;
}
export interface UpdateContactBody {
  fullName: string;
  email: string;
  phone: string;
  registrationDate: Date;
  deletedAt?: Date;
}
