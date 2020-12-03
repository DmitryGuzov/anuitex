import { NextFunction, Response, Request } from "express";

export const handleError = (error: any, req: Request, res: Response, next: NextFunction) => {
    const { statusCode, message } = error;
    res.status(statusCode).json({
      status: "error",
      statusCode,
      message,
    });
  };
  