export enum ConfigType {
  text,
  dropdown,
}

export class Config {
  key: string;
  groupName: string;
  name: string;
  remark: string;
  details: string;
  type: ConfigType;
  arrValue?: string[];
}
