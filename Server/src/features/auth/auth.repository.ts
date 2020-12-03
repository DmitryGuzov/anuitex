//Node modules
import httpStatus from "http-status";

//Entities
import AuthSchemaEntityModel from "./entities/authSchema.entity";
// Models
import { ResponseAuthModel } from "./models";
import {AuthUserModel} from './interface/authUserModel.interface'
import { ErrorHandler } from "../shared/Errors/ErrorHandler";

export async function createUser(
  email: string,
  password: string,
  username: string
): Promise<ResponseAuthModel> {
  try {
    const userCreated = await AuthSchemaEntityModel.create({
      email,
      password,
      username,
    });
  
    const responseModel: ResponseAuthModel = {
      email: userCreated.email,
      password: userCreated.password,
      _id: userCreated._id,
      username: userCreated.username,
    };
  
    return responseModel;
  }
  catch(error) {
    throw new ErrorHandler(400,'Something went wrong')
  }
 
}
export async function findUserByEmail(
  email: string
): Promise<AuthUserModel | null> {
  try{
    return await AuthSchemaEntityModel.findOne({ email });
  }
  catch(error) {
    throw new ErrorHandler(400,'Something went wrong')
  }
  
}