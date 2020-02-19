import { IAppInfo, IQueryFilter, FilterFunc } from './models';
import { ageFilter, categoryFilter, ratingFilter } from './filters';
import { IAppsAdapter } from '../data/adapter';

const MAX_RECOMMENDED_APPS = 3;

export class Service {
  
  public topN: number = MAX_RECOMMENDED_APPS; // Exposed for testability inject of constructor
  public filters: FilterFunc[] = [ageFilter, categoryFilter, ratingFilter]; // Exposed for testability inject of constructor
  private readonly appsAdapter: IAppsAdapter;

  constructor(appsAdapter: IAppsAdapter) {
    this.appsAdapter = appsAdapter;
  }
  
  public async filter(query: IQueryFilter): Promise<IAppInfo[]> {
    return new Promise(async (resolve) => {
      
      let apps = await this.appsAdapter.getAllApps();
      const recommendedApps = apps.filter((appInfo: IAppInfo) => {
        return this.filters.every(f => f(query, appInfo));
      });
      recommendedApps.sort((a: IAppInfo, b: IAppInfo) => b.rating - a.rating);
      const topNApps = recommendedApps.slice(0, this.topN);
      resolve(topNApps);
    });
  }
}
