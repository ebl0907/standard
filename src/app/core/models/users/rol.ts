import { CodeDescription } from "../codeDescription";
import { Permission } from "./permission";

export class Rol extends CodeDescription{
    permissions: Permission[];
    constructor(code: string, description: string, permissions: Permission[]) {
        super(code, description);
        this.permissions = permissions;
    }
  }