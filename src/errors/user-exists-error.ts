import { CustomError } from './custom-error';

/* Error class for user already exists error */
export class UserExistsError extends CustomError {
    statusCode = 400;
    reason = 'A user with the provided email address already exists.';

    constructor() {
        super('A user with the provided email address already exists.');

        Object.setPrototypeOf(this, UserExistsError.prototype);
    }

    serializeErrors() {
        return [{ message: this.reason }];
    }
}
