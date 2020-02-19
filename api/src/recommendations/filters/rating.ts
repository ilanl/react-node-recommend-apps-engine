
import { IAppInfo, IQueryFilter, FilterFunc } from '../models';

export const ratingFilter:FilterFunc = (query: IQueryFilter, appInfo: IAppInfo) => {
  let result = false;
  let requiredRating = <number>query.rating;
  if (requiredRating === undefined) {
    result = false;
  }
  else {
    result = appInfo.rating >= requiredRating;
  }
  return result;
}
