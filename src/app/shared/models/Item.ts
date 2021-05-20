import { IPricing } from './Pricing';
import { IPermissionStoreDetail } from './PermissionStoreDetail';
import { IItemUnit } from './ItemUnit';
import { ILookup } from './Lookup';
import { IItemStore } from './ItemStore';
import { IBillDetail } from './BillDetail';
export interface IItem {
  id?: number;
  codeCompany?: string;
  codeProvider?: string;
  name?: string;
  item?: IItem;
  typeItem?: ILookup;
  billDetails?: Array<IBillDetail>;
  items?: Array<IItem>;
  itemStores?: Array<IItemStore>;
  itemUnits?: Array<IItemUnit>;
  permissionStoreDetails?: Array<IPermissionStoreDetail>;
  pricings?: Array<IPricing>;
}
