import { enumTypes } from './enumTypes';
export interface IFields {
  name: string;
  label: string;
  type: enumTypes;
  style?: string;
  value?: any;
  isHidden?: boolean;
  readOnly?: boolean;
  isList?: boolean;
  list?: Array<{}>;
  errors?: [{}];
}
