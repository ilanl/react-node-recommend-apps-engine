
import { IAppInfo, IQueryFilter, FilterFunc } from '../models';

export const categoryFilter:FilterFunc = (query: IQueryFilter, appInfo: IAppInfo) => {
  let result = false;
  let requiredOnlyInCategories = <string[]>query.categories;
  if (!requiredOnlyInCategories || requiredOnlyInCategories.length === 0) {
    return false;
  }
  result = requiredOnlyInCategories.includes(appInfo.category);
  return result;
}
