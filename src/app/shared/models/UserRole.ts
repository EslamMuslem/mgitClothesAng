import { IUser } from './User';
import { IRole } from './Role';
export interface IUserRole {
  active?: number;
  user?: IUser;
  role?: IRole;
}
