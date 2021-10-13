"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_error_1 = require("../errors/custom-error");
/* Middleware for handling errors in the application */
exports.errorHandler = (error, request, response, next) => {
    if (error instanceof custom_error_1.CustomError) {
        return response.status(error.statusCode).send({ errors: error.serializeErrors() });
    }
    response.status(500).send({
        errors: [{ message: `Something went wrong: ${error.message}` }]
    });
};
