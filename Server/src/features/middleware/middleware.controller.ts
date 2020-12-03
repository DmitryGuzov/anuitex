import { Request, Response, NextFunction } from "express";

import * as middlewareService from "./middleware.service";

export function verifyHandler(req: Request, res: Response, next: NextFunction) {
  middlewareService
    .middleware(req, res, next)
    .then(() => {
      console.log('Verified')
    })
    .catch((error) => {
      next(error);
    });
}
