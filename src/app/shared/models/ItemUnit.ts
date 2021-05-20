import { IUnit } from './Unit';
import { IItem } from './Item';
export interface IItemUnit {
  containSmallest?: number;
  isPrintUnit?: number;
  item?: IItem;
  unit?: IUnit;
}
