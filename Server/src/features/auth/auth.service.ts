// Node modules
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Response, NextFunction } from "express";

//Repositories
import * as authRepository from "./auth.repository";
// Helpers
import { logger } from "../../config/logger";
import { ErrorHandler } from "../shared/Errors/ErrorHandler";
import config from "../../config/config";

// Interfaces
import { AuthSignInModel } from "./interface/authSignIn.interface";
import { AuthSignUpModel } from "./interface/authSignUp.interface";
// Models
import { RequestAuthModel } from "./models";
// Validations
import { AuthValidation } from "./validation/auth.validation";

export async function signUp(req: RequestAuthModel) {
  const validation: boolean = await AuthValidation.isValid(req);

  if (!validation) {
    logger.log("error", "Bad request, please check your pass or login");
    throw new ErrorHandler(400, "Bad request, please check your pass or login");
  }
  const salt = await bcrypt.genSalt(10);
  let pass = req.password;
  let hashPassword = "";
  hashPassword = await bcrypt.hash(pass, salt);

  const response: AuthSignUpModel = await authRepository.createUser(
    req.email,
    hashPassword,
    req.username
  );
  logger.log("info", `The user created on ${req.email}`);
  return `The user created on ${req.email}`;
}
export async function signIn(req: AuthSignInModel) {
  const valid: boolean = await AuthValidation.isValid(req);
  if (!valid) {
    logger.log("error", "Bad request, check your email or password");
    throw new ErrorHandler(400, "Bad request, check your email or password");
  }

  let userInDB = await authRepository.findUserByEmail(req.email);
  if (!userInDB) {
    logger.log("error", "User not found");
    throw new ErrorHandler(404, "User not found");
  }

  let access = await bcrypt.compare(req.password, userInDB.password);
  if (!access) {
    logger.log("error", "Access denied");
    throw new ErrorHandler(401, "Access denied");
  }

  const token = jwt.sign(
    {
      userId: userInDB._id,
      email: userInDB.email,
      username: userInDB.username,
    },
    config.SECRET_KEY,
    {
      expiresIn: "24h",
    }
  );

  logger.log("info", `${userInDB.email} logged in`);
  return { token: token };
}
export async function userInfo(req: any, res: Response) {
  return `User ${req.token.username} logged in now`;
}
export async function logout(req: Request, res: Response, next: NextFunction) {
  res.send("User log out almost");
}