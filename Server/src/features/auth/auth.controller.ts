//Vendors
import { Request, Response, NextFunction } from "express";

//Services
import * as authService from "./auth.service";

export function signUpHandler(req: Request, res: Response, next: NextFunction) {
  authService
    .signUp(req.body)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => next(err));
}
export function signInHandler(req: Request, res: Response, next: NextFunction) {
  authService
    .signIn(req.body)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      next(err);
    });
}
export function signedInHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  authService.userInfo(req, res).then((result) => {
    res.send(result);
  });
}
export function userHandler(req: Request, res: Response, next: NextFunction) {
  authService.userInfo(req, res).then((result) => {
    res.send(result);
  });
}
export function logOutHandler(req: any, res: Response, next: NextFunction) {
  authService.logout(req, res, next).then((result) => {
    res.send(result)
  });
}