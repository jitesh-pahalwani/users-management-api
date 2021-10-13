"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Abstract class for a custom error object. All error objects extend this class */
class CustomError extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}
exports.CustomError = CustomError;
