
import express, { Application, Request, Response } from 'express';

import bodyParser from 'body-parser';
import cors from 'cors';
import { IAppInfo, IQueryFilter } from './recommendations/models';
import { Service } from './recommendations/service';
import { IAppsAdapter, AppsAdapter } from './data/adapter'; // DDD db is outside

class App {
  
  private APPS_RECOMMEND_ROUTE: string = `/apps/discover`;
  
  private service: Service;
  public app: Application;
  
  constructor(appsAdapter: IAppsAdapter = new AppsAdapter()) {
    this.app = express();
    this.service = new Service(appsAdapter);
    
    this.setUpMiddlewares();
    this.setUpRoutes();
  }

  private setUpMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cors());
  }
  
  private setUpRoutes() {
    
    // Extract to controller
    this.app.route(this.APPS_RECOMMEND_ROUTE).post(async (req: Request, res: Response) => {
      let query = <IQueryFilter>req.body;
      console.log('request', {...query }); // Add middleware to log request/response
      let results: IAppInfo[] = await this.service.filter(query);
      res.json(results);
     });
  }
}

export default new App().app;