export interface IAppInfo {
  id: number;
  name: string;
  category: string;
  external_id: string;
  rating: number;
  install_count: number;
  description: string;
  url: string;
  publisher: string;
  icon: string;
  min_age?: number;
}

export interface IQueryFilter {
  [field: string]: any;
}

export type FilterFunc = (query: IQueryFilter, appInfo: IAppInfo) => boolean;
