// Node modules
import { Response, NextFunction, request } from "express";

//Repositories
import * as projectRepository from "./project.repository";
// Helpers
import { ErrorHandler } from "../shared/Errors/ErrorHandler";
import { logger } from "../../config/logger";

// Interfaces

// Models
import { RequestProjectModel } from "./models";
// Validations
import { ProjectValidation } from "./validation/project.validation";
import { projectRouter } from "./project.routes";


export async function createProject(req: RequestProjectModel, res: Response) {
  console.log(req);
  const validation: boolean = await ProjectValidation.isValid(req);
  if (!validation) {
    logger.log("info", "Project schema");
    throw new ErrorHandler(400, "something wrong");
  }
  const response: RequestProjectModel = await projectRepository.create(
    req.title,
    req.description,
    req.features,
    req.rate
  );
  logger.log("info", `The project was created with title: ${req.title}`);

  return {
    response,
    message: `The project was created with title: ${req.title}`,
  };
}
export async function getAllProjects(res: Response) {
  await projectRepository.getAll().then((result) => {
    if(!result) {
      logger.log('error','Projects not found')
      throw new ErrorHandler(401,'Projects not found')
    }
    res.send(result);
  });
}
export async function getAllUsers(res: Response) {
  await projectRepository.allUsers().then((result) => {
    if(!result) {
      logger.log('error','Users not found')
      throw new ErrorHandler(401,'Users not found')
    }
    res.send(result);
  });
}

export async function estimateFeature(id: string,lvl: number,leadTime: string, res: Response) {
  await projectRepository.estimateFeature(id,lvl,leadTime).then((result) => {res.send(result)})
}

export async function getProject(id: string, res: Response) {
  await projectRepository.getProjectById(id)
  .then((result) => {
    console.log(result)
    if(!result) {
      throw new ErrorHandler(500,'Not found')
    }
    res.send(result)
  })
  
}