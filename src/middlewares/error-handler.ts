import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';

/* Middleware for handling errors in the application */
export const errorHandler = (
    error: Error,
    request: Request,
    response: Response,
    next: NextFunction
) => {
    if (error instanceof CustomError) {
        return response.status(error.statusCode).send({ errors: error.serializeErrors() });
    }

    response.status(500).send({
        errors: [{ message: `Something went wrong: ${error.message}` }]
    });
}

