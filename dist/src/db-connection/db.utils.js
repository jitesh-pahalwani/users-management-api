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
const generic_error_1 = require("../errors/generic-error");
const user_exists_error_1 = require("../errors/user-exists-error");
const db_instance_1 = __importDefault(require("./db.instance"));
/* Method to get all users from database */
exports.getUsers = () => __awaiter(this, void 0, void 0, function* () {
    try {
        /* Fetch all users from the database. */
        const usersCollection = db_instance_1.default.db('users-list').collection('users').find();
        const usersArray = yield usersCollection.toArray();
        return usersArray;
    }
    catch (err) {
        throw new generic_error_1.GenericError();
    }
});
/* Method to add a new user to the database */
exports.addNewUser = (newUserObject) => __awaiter(this, void 0, void 0, function* () {
    try {
        /* Checking if the user with the provided email id already exists or not. */
        var result = yield db_instance_1.default.db('users-list').collection('users').findOne({ email: newUserObject.email });
        if (!result) {
            /* If user does not already exist */
            try {
                /* Add the new user to the database */
                yield db_instance_1.default.db('users-list').collection('users').insertOne(newUserObject);
                return 'User created successfully';
            }
            catch (err) {
                throw new generic_error_1.GenericError();
            }
        }
        else {
            /* If user already exists */
            throw new user_exists_error_1.UserExistsError();
        }
    }
    catch (err) {
        throw err;
    }
});
