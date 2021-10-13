"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_utils_1 = require("../db-connection/db.utils");
const router = express_1.default.Router();
exports.usersRouter = router;
/* Route for GET method on /users. Returns list of all users in the database. */
router.get('/users-management/users', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const result = yield db_utils_1.getUsers();
        res.status(200).send(result);
    }
    catch (err) {
        next(err);
    }
}));
/*
Route for POST method on /users.
Adds a new user to the database if a user with the provided email does not exist.
*/
router.post('/users-management/users', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const { firstName, lastName, email, dateOfBirth } = req.body;
        const result = yield db_utils_1.addNewUser({
            firstName: firstName,
            lastName: lastName,
            email: email,
            dateOfBirth: dateOfBirth
        });
        res.status(200).send({ message: result });
    }
    catch (err) {
        next(err);
    }
}));
