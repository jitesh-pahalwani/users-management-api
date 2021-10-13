"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const users_1 = require("./src/routes/users");
const error_handler_1 = require("./src/middlewares/error-handler");
const app = express_1.default();
app.use(express_1.default.json());
app.use(users_1.usersRouter);
app.use(error_handler_1.errorHandler);
app.listen(process.env.PORT_NUMBER, () => {
    return console.log(`Listening on port ${process.env.PORT_NUMBER}`);
});
