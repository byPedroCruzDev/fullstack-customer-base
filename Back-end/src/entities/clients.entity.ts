import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  DeleteDateColumn,
} from "typeorm";
import { Contact } from "./contacts.entity";

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  registrationDate?: Date;

  @OneToMany(() => Contact, (contact) => contact.client, { nullable: true })
  contact?: Contact[];

  @DeleteDateColumn()
  deletedAt: Date;
}
