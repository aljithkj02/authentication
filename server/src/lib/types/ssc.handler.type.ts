import { AuthType } from "@prisma/client";

export interface SSCInputType {
    name: string;
    email: string;
    authType: AuthType
}