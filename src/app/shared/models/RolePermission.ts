import { IRole } from './Role';
import { IPermission } from './Permission';
export interface IRolePermission {
  active?: number;
  permission?: IPermission;
  role?: IRole;
}
