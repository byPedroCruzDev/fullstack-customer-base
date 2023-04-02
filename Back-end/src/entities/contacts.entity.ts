import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  DeleteDateColumn,
} from "typeorm";
import { Client } from "./clients.entity";

@Entity()
export class Contact {
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

  @ManyToOne(() => Client, (client) => client.contact)
  client: Client;

  @DeleteDateColumn()
  deletedAt: Date;
}
