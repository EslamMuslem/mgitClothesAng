import { IPermissionStore } from './PermissionStore';
import { IBill } from './Bill';
export interface IBook {
  id?: number;
  name?: string;
  nameE?: string;
  bills?: Array<IBill>;
  permissionStores?: Array<IPermissionStore>;
}
