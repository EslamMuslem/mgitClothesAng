import { IPerson } from './Person';
export interface IPhone {
  id?: number;
  phone?: string;
  statusCode?: string;
  person?: IPerson;
}
