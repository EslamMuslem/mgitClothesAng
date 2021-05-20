import { IBillDetIncDecMon } from './BillDetIncDecMon';
import { IAccount } from './Account';
import { IBillIncDecMon } from './BillIncDecMon';
export interface IIncreaseDecreaseMoney {
  id?: number;
  decreaseBill?: number;
  increaseBill?: number;
  name?: string;
  showBillOrDetail?: number;
  value?: number;
  valuePercentage?: number;
  account?: IAccount;
  billDetIncDecMons?: Array<IBillDetIncDecMon>;
  billIncDecMons?: Array<IBillIncDecMon>;
}
