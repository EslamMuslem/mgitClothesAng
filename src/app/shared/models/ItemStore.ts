import { IStore } from './Store';
import { ILookup } from './Lookup';
import { IItem } from './Item';
export interface IItemStore {
  id?: number;
  hireDate?: Date;
  item?: IItem;
  typeTransItem?: ILookup;
  store?: IStore;
  amount?: number;
  avgPrice?: number;
  count?: number;
  totalAmount?: number;
}
