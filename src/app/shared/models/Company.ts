import { IStore } from './Store';
import { IPricing } from './Pricing';
import { IPermissionStore } from './PermissionStore';
import { IBranch } from './Branch';
import { IBill } from './Bill';
import { IAccount } from './Account';
export interface ICompany {
  id?:number;
  name?:string;
   account?:IAccount;
    bills?:Array<IBill>;
     branches?:Array<IBranch>;
      permissionStores?:Array<IPermissionStore>;
      pricings?:Array<IPricing> ;
      stores?:Array<IStore> ;
}
