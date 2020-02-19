
import { IAppInfo, IQueryFilter, FilterFunc } from './models';

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

export const categoryFilter:FilterFunc = (query: IQueryFilter, appInfo: IAppInfo) => {
  let result = false;
  let requiredOnlyInCategories = <string[]>query.categories;
  if (!requiredOnlyInCategories) {
    return false;
  }
  result = requiredOnlyInCategories.includes(appInfo.category);
  return result;
}

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
