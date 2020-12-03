//Vendors
import * as bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
//Constants
import { ApiEndpointsConstants } from "./config/api-endpoints.constants";
import "./config/db";
//Routes
import { authRouter } from "./features/auth/auth.routes";
import {projectRouter} from "./features/project/project.routes"
// Handlers
import {handleError} from './features/shared/Errors/handleError'


class App {
  public express: express.Application;
  constructor() {
    this.express = express();
    this.setMiddleware();
    this.setRoutes();
    this.catchErrors();
  }

  private setMiddleware(): void {
    this.express.use(cors());
    this.express.use(morgan("dev"));
    this.express.use(bodyParser.json({ limit: "10mb" }));
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(helmet());
  }

  private setRoutes(): void {
    const getUrl = (route: string): string => ApiEndpointsConstants.API + route;

    this.express.use(getUrl(ApiEndpointsConstants.AUTH_FEATURE), authRouter);
    this.express.use(getUrl(ApiEndpointsConstants.PROJECT_FEATURE),projectRouter)
  }

  private catchErrors(): void {
    this.express.use(handleError);
  }
}

export default new App().express;
