import { User } from "./user";

export interface Message {
  sender: User;
  recipient: User;
  message: string;
  datetime: Date;
  readed: boolean;
}
