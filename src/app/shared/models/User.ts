import { IUserRole } from './UserRole';
export interface IUser {
  id?: number;
  active?: number;
  name?: string;
  password?: string;
  userRoles?: Array<IUserRole>;
}
