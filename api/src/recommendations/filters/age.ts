
import { IAppInfo, IQueryFilter, FilterFunc } from '../models';

export const ageFilter:FilterFunc = (query: IQueryFilter, appInfo: IAppInfo) => {
  let result = false;
  let requiredAge = <number>query.age;
  if (requiredAge === undefined) {
    result = false;
  }
  else {
    result = appInfo.min_age ? appInfo.min_age >= requiredAge : true;
  }
  return result;
}
