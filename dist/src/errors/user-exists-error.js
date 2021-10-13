"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_error_1 = require("./custom-error");
/* Error class for user already exists error */
class UserExistsError extends custom_error_1.CustomError {
    constructor() {
        super('A user with the provided email address already exists.');
        this.statusCode = 400;
        this.reason = 'A user with the provided email address already exists.';
        Object.setPrototypeOf(this, UserExistsError.prototype);
    }
    serializeErrors() {
        return [{ message: this.reason }];
    }
}
exports.UserExistsError = UserExistsError;
