import { IIncreaseDecreaseMoney } from './IncreaseDecreaseMoney';
import { IBill } from './Bill';
export interface IBillIncDecMon {
  bill?: IBill;
  increaseDecreaseMoney?: IIncreaseDecreaseMoney;
  value?: number;
  valuePercentage?: number;
}
