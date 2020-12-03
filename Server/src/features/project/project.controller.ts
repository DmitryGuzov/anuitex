//Vendors
import { Request, Response, NextFunction } from 'express';
import { projectRouter } from './project.routes';
//Services
import * as projectService from './project.service';

export function createProjectHandler(req: Request, res: Response, next: NextFunction) {
  projectService
    .createProject(req.body, res)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => next(err));
}

export function showProjectsHandler(req: Request, res: Response, next: NextFunction) {
  projectService
    .getAllProjects(res)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => next(err));
}

export function getAllUsersHandler(req: Request, res: Response, next: NextFunction) {
  projectService
    .getAllUsers(res)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      next(error);
    });
}
export function featureHandler(req: Request, res: Response, next: NextFunction) {
  const { id, lvl, leadTime } = req.body;
  projectService
    .estimateFeature(id, lvl, leadTime, res)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      next(error);
    });
}

export function showProjectHandler(req: Request, res: Response, next: NextFunction) {
  const id = String(req.query.id);
  projectService
    .getProject(id, res)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      next(error);
    });
}
