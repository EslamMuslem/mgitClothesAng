import { ITypePrice } from './TypePrice';
import { IPerson } from './Person';
export interface IPersonInfo {
  id?: number;
  theCreditLimit?: number;
  person?: IPerson;
  typePrice?: ITypePrice;
}
