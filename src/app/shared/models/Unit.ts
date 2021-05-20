import { IPricing } from './Pricing';
import { IPermissionStoreDetail } from './PermissionStoreDetail';
import { IItemUnit } from './ItemUnit';
import { IBillDetail } from './BillDetail';
export interface IUnit {
  id?: number;
  name?: string;
  billDetails?: Array<IBillDetail>;
  itemUnits?: Array<IItemUnit>;
  permissionStoreDetails?: Array<IPermissionStoreDetail>;
  pricings?: Array<IPricing>;
}
