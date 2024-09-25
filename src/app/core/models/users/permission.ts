import { CodeDescription } from "../codeDescription";

export class Permission extends CodeDescription{
    constructor(code: string, description: string) {
        super(code, description);
    }
}