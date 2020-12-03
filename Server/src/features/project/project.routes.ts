//Vendors
import { request, Router} from "express";
//Constants
import { ApiEndpointsConstants } from "../../config/api-endpoints.constants";
//Controllers
import * as ProjectController from "./project.controller";
import * as MiddlewareController from '../middleware/middleware.controller'

import express from "express";

const router = express.Router();

export const projectRouter: Router = Router();

projectRouter.post(ApiEndpointsConstants.CREATE_PROJECT, MiddlewareController.verifyHandler, ProjectController.createProjectHandler);
projectRouter.get(ApiEndpointsConstants.GET_PROJECTS, MiddlewareController.verifyHandler, ProjectController.showProjectsHandler);
projectRouter.get(ApiEndpointsConstants.GET_PROJECT, MiddlewareController.verifyHandler, ProjectController.showProjectHandler)
projectRouter.get(ApiEndpointsConstants.GET_USERS, MiddlewareController.verifyHandler, ProjectController.getAllUsersHandler);
projectRouter.post(ApiEndpointsConstants.ESTIMATE_FEATURE, MiddlewareController.verifyHandler, ProjectController.featureHandler);