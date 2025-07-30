import { SetMetadata } from "@nestjs/common";
export const ROLES_KEY = 'roles';


//custom decorator to set roles metadata
export const Roles = (...roles: string[]) => {
    return SetMetadata(ROLES_KEY, roles);
};
