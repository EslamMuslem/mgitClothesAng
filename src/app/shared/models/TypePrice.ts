import { IPricing } from './Pricing';
import { IPersonInfo } from './PersonInfo';
export interface ITypePrice {
  id?: number;
  name?: string;
  nameE?: string;
  personInfos?: Array<IPersonInfo>;
  pricings?: Array<IPricing>;
}
