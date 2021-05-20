import { IIncreaseDecreaseMoney } from './IncreaseDecreaseMoney';
import { IBillDetail } from './BillDetail';
export interface IBillDetIncDecMon {
  value?: number;
  valuePercentage?: number;

  id?: number;
  billDetail?: IBillDetail;
  increaseDecreaseMoney?: IIncreaseDecreaseMoney;
}
