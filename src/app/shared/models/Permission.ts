import { IRolePermission } from './RolePermission';
import { ILookup } from './Lookup';
export interface IPermission {
  id?: number;
  active?: number;
  name?: string;
  permission?: ILookup;
  rolePermissions?: Array<IRolePermission>;
}
