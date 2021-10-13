"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_error_1 = require("./custom-error");
/* Error class for connection failure with MongoDB database */
class DatabaseConnectionError extends custom_error_1.CustomError {
    constructor() {
        super('Error connecting to database');
        this.statusCode = 500;
        this.reason = 'Error connecting to database';
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
    serializeErrors() {
        return [{ message: this.reason }];
    }
}
exports.DatabaseConnectionError = DatabaseConnectionError;
