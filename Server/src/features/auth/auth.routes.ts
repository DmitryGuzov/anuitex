//Vendors
import { Router } from "express";
//Constants
import { ApiEndpointsConstants } from "../../config/api-endpoints.constants";
//Controllers
import * as AuthController from "./auth.controller";
import * as MiddlewareController from '../middleware/middleware.controller'
import express from "express";

const router = express.Router();

export const authRouter: Router = Router();

authRouter.post(ApiEndpointsConstants.SIG_UP, AuthController.signUpHandler);
authRouter.post(ApiEndpointsConstants.SIGN_IN, AuthController.signInHandler);
authRouter.post(ApiEndpointsConstants.SIGNED_IN, MiddlewareController.verifyHandler, AuthController.userHandler);
authRouter.post(ApiEndpointsConstants.LOG_OUT, MiddlewareController.verifyHandler, AuthController.logOutHandler);
