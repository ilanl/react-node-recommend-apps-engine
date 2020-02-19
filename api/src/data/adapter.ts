import { IAppInfo } from "../recommendations/models";

export interface IAppsAdapter {
  getAllApps(): Promise<IAppInfo[]>
}

export class AppsAdapter implements IAppsAdapter {
  getAllApps(): Promise<IAppInfo[]> {
    return new Promise(async (resolve) => {
      resolve(<IAppInfo[]>require('./apps.json'));
    })
  }
}