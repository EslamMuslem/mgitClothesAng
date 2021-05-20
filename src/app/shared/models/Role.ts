import { IUserRole } from './UserRole';
import { IRolePermission } from './RolePermission';
export interface IRole {
  id?: number;
  active?: number;
  name?: string;
  rolePermissions?: Array<IRolePermission>;
  userRoles?: Array<IUserRole>;
}
