import bodyParser from "body-parser";
import express, { NextFunction, Request, Response } from "express";

import "reflect-metadata";
import "../../container";
import { AppError } from "../../errors/AppError";
import createConnection from "../typeorm";
import { router } from "./routes";

import "express-async-errors";

createConnection();
const app = express();

app.use(bodyParser.json());
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }

    return response.status(500).json({
      status: "error",
      message: `Internals server error - ${err.message}`,
    });
  }
);

export { app };
