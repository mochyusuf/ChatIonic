import { User } from "../../models/user/user.interface";

const userList: User[] = [
    {firstName : '0', lastName:'Tes',email:'0@tes.com',avatar:'assets/imgs/avatar.jpg', dateOfBirth:new Date() },
    {firstName : '1', lastName:'Tes',email:'1@tes.com',avatar:'assets/imgs/avatar.jpg', dateOfBirth:new Date()},
    {firstName : '2', lastName:'Tes',email:'2@tes.com',avatar:'assets/imgs/avatar.jpg', dateOfBirth:new Date()},
    {firstName : '3', lastName:'Tes',email:'3@tes.com',avatar:'assets/imgs/avatar.jpg', dateOfBirth:new Date()},
]

export const USER_LIST = userList;