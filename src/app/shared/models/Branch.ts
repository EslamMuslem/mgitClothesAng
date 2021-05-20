import { IStore } from './Store';
import { IPermissionStore } from './PermissionStore';
import { IPricing } from './Pricing';
import { IBill } from './Bill';
import { ICompany } from './Company';
import { IAccount } from './Account';
export interface IBranch {
  id?: number;
  name?: string;
  account?: IAccount;
  company?: ICompany;
  permissionStores?: Array<IPermissionStore>;
  pricings?: Array<IPricing>;
  stores?: Array<IStore>;
  bills?: Array<IBill>;
}
