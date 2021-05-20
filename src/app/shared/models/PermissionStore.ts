import { IPerson } from './Person';
import { IPermissionStoreDetail } from './PermissionStoreDetail';
import { IStore } from './Store';
import { IBook } from './Book';
import { ILookup } from './Lookup';
import { IBranch } from './Branch';
import { ICompany } from './Company';
export interface IPermissionStore {
  id?: number;
  person?: IPerson;
  company?: ICompany;
  branch?: IBranch;
  store?: IStore;
  transItem?: ILookup;
  book?: IBook;
  discountsAdditions?: number;
  hireDate?: Date;
  reviewed?: number;
  migrateFinc?: number;
  migrateStore?: number;
  netCost?: number;
  totalCost?: number;
  createBy?: number;
  createDate?: Date;
  updateBy?: number;
  updateDate?: Date;
  permissionStoreDetails?: Array<IPermissionStoreDetail>;
}
