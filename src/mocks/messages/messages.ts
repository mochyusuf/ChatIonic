import { Messages } from "../../models/messages/messages.interface";
import { USER_LIST } from "../user/user";

const userList = USER_LIST;
const messageList:Messages[] = [];

userList.forEach((user) =>
    messageList.push({user:user, date: new Date(),lastMessage:"Hello Worlds"})
)

export const MESSAGE_LIST = messageList;