import { IBillIncDecMon } from './BillIncDecMon';
import { IBillDetail } from './BillDetail';
import { IStore } from './Store';
import { IBranch } from './Branch';
import { ILookup } from './Lookup';
import { IBook } from './Book';
import { IPerson } from './Person';
import { ICompany } from './Company';

export interface IBill {
  id: number;

  book: IBook;
  person: IPerson;
  typeBill: ILookup;
  company: ICompany;
  branch: IBranch;
  store: IStore;
  bookPermissionId?: number;
  permissionId?: number;
  discountsAdditions?: number;
  hireDate?: Date;
  netCost?: number;
  totalCost?: number;
  createBy?: number;
  createDate?: Date;
  updateBy?: number;
  updateDate?: Date;
  mirgateFinc: number;
  mirgateStore: number;
  reviewed: number;
  billDetails?: Array<IBillDetail>;
  billIncDecMons?: Array<IBillIncDecMon>;
}
