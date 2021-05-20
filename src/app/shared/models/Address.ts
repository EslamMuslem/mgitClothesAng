import { IPerson } from './Person';
export interface IAddress {
  id?: number;
  address?: string;
  city?: string;
  street?: string;
  person: IPerson;
}
