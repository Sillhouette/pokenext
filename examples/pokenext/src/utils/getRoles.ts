import { Claims } from "@auth0/nextjs-auth0";
import { UserProfile } from "@auth0/nextjs-auth0/client";

type User = UserProfile | Claims;

type Role = 'admin' | 'trainer';
type Roles = Role[];

const validRoles: Role[] = ['admin', 'trainer'];

export const getRoles = ({ user }: { user: User }): Roles => {
    const roles = user.goodrx_roles as Roles;

    return roles.filter(role => validRoles.includes(role));
}
