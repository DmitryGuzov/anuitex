import { Response, Request, NextFunction, Errback } from "express";

import config from "../../config/config";
import { ErrorHandler } from "../shared/Errors/ErrorHandler";
import jwt from "jsonwebtoken";
import { authRouter } from "../auth/auth.routes";
import {logger} from '../../config/logger'

export async function middleware(req: any, res: Response, next: NextFunction) {
 
  const authHeader = req.headers.authorization;
  if (!authRouter) {
    logger.log('error','Auth header false');
    throw new ErrorHandler(403, "Auth header false");    
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, config.SECRET_KEY, (err: any | null, authData: any) => {
    if (err) {
      logger.log('error','Token error');
      throw new ErrorHandler(403, "Token error");  
    }
    req.token = authData;
    next()
  });
}