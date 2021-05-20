import { ILookup } from './Lookup';
import { IAccount } from './Account';
export interface ITransAccount {
  id?: number;
  comments?: string;
  createBy?: number;
  createDate?: Date;
  hireDate?: Date;
  updateBy?: number;
  updateDate?: Date;
  valueDecrease?: number;
  valueIncrease?: number;
  account?: IAccount;
  transAccount?: ILookup;
}
