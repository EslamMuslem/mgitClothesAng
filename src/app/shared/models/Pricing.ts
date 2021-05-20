import { IUnit } from './Unit';
import { ITypePrice } from './TypePrice';
import { IItem } from './Item';
import { IBranch } from './Branch';
import { ICompany } from './Company';
export interface IPricing {
  id?: number;
  price?: number;
  company?: ICompany;
  branch?: IBranch;
  item?: IItem;
  typePrice?: ITypePrice;
  unit?: IUnit;
}
