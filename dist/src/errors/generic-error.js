"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_error_1 = require("./custom-error");
/* Error class for all generic errors in the application */
class GenericError extends custom_error_1.CustomError {
    constructor() {
        super('Cannot serve your request at the moment. Please try again later.');
        this.statusCode = 500;
        this.reason = 'Cannot serve your request at the moment. Please try again later.';
        Object.setPrototypeOf(this, GenericError.prototype);
    }
    serializeErrors() {
        return [{ message: this.reason }];
    }
}
exports.GenericError = GenericError;
