import { IBillDetIncDecMon } from './BillDetIncDecMon';
import { IUnit } from './Unit';
import { IItem } from './Item';
import { IBill } from './Bill';
export interface IBillDetail {
  id?: number;
  bill?: IBill;
  unit?: IUnit;
  item?: IItem;
  avgPrice?: number;
  billReturnId?: number;
  discountsAdditions?: number;
  hireDate?: Date;
  mirgateFinc?: number;
  mirgateStore?: number;
  netCost?: number;
  numberItemReturn?: number;
  totalCost?: number;
  billDetIncDecMons?: Array<IBillDetIncDecMon>;
}
