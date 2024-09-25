import { Rol } from "./rol";

export class User {
    username: string;
    password: string;
    mail: string;
    isAdmin: boolean;
    roles: Rol[]
  
    constructor(username: string, password: string, mail: string, isAdmin: boolean, roles: Rol[]) {
      this.username = username;
      this.password = password;
      this.mail = mail;
      this.isAdmin = isAdmin;
      this.roles = roles;
    }
  }