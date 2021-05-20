import { IUnit } from './Unit';
import { IPermissionStore } from './PermissionStore';
import { IItem } from './Item';
export interface IPermissionStoreDetail {
  id?: number;
  item?: IItem;
  unit?: IUnit;
  permissionStore?: IPermissionStore;
  avgPrice?: number;
  discountsAdditions?: number;
  hireDate?: Date;
  migrateFinc?: number;
  migrateStore?: number;
  netCost?: number;
  totalCost?: number;
}
