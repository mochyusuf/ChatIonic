import { User } from "../user/user.interface";

export interface Messages{
    user : User;
    date : Date;
    lastMessage : string;
}