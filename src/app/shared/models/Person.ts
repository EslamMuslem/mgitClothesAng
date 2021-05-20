import { IPhone } from './Phone';
import { IPersonInfo } from './PersonInfo';
import { IPermissionStore } from './PermissionStore';
import { IBill } from './Bill';
import { IAddress } from './Address';
import { ILookup } from './Lookup';
import { IAccount } from './Account';
export interface IPerson {
  id?: number;
  name?: string;
  account?: IAccount;
  person?: ILookup;
  addresses?: Array<IAddress>;
  personInfos?: Array<IPersonInfo>;
  phones?: Array<IPhone>;
  bills?: Array<IBill>;
  permissionStores?: Array<IPermissionStore>;
}
