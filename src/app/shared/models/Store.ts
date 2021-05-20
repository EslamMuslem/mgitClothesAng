import { IPermissionStore } from './PermissionStore';
import { IItemStore } from './ItemStore';
import { IBill } from './Bill';
import { IBranch } from './Branch';
import { ICompany } from './Company';
export interface IStore {
  id?: number;
  name?: string;
  branch?: IBranch;
  company?: ICompany;
  bills?: Array<IBill>;
  itemStores?: Array<IItemStore>;
  permissionStores?: Array<IPermissionStore>;
}
