import { ITransAccount } from './TransAccount';
import { ISafe } from './Safe';
import { IPerson } from './Person';
import { IIncreaseDecreaseMoney } from './IncreaseDecreaseMoney';
import { IBranch } from './Branch';
import { ICompany } from './Company';

export interface IAccount {
  id?: number;

  code?: string;
  name?: string;
  ownsChild?: number;
  account?: IAccount;
  accounts?: Array<IAccount>;
  branches?: Array<IBranch>;
  increaseDecreaseMoneys?: Array<IIncreaseDecreaseMoney>;
  companies?: Array<ICompany>;
  persons?: Array<IPerson>;
  safes?: Array<ISafe>;
  transAccounts?: Array<ITransAccount>;
}
