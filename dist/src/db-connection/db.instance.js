"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const db_connection_error_1 = require("../errors/db-connection-error");
/* URI to connect to MongoDB instance */
const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.gbqqm.mongodb.net/users-list?retryWrites=true&w=majority`;
const client = new mongodb_1.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
/* Connecting to MongoDB client */
client.connect((err) => {
    if (err) {
        throw new db_connection_error_1.DatabaseConnectionError();
    }
});
exports.default = client;
