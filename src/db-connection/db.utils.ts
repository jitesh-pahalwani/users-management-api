import { Cursor } from 'mongodb';
import { GenericError } from '../errors/generic-error';
import { UserExistsError } from '../errors/user-exists-error';

import { UserInterface } from '../interfaces/interfaces';
import mongodbClient from './db.instance';

/* Method to get all users from database */
export const getUsers = async (): Promise<Array<UserInterface>> => {
    try {
        /* Fetch all users from the database. */
        const usersCollection: Cursor = mongodbClient.db('users-list').collection('users').find();
        const usersArray: Array<UserInterface> = await usersCollection.toArray();
        return usersArray;
    } catch (err) {
        throw new GenericError();
    }

}

/* Method to add a new user to the database */
export const addNewUser = async (newUserObject: UserInterface): Promise<string> => {
    try {
        /* Checking if the user with the provided email id already exists or not. */
        var result = await mongodbClient.db('users-list').collection('users').findOne({ email: newUserObject.email });
        if (!result) {
            /* If user does not already exist */
            try {
                /* Add the new user to the database */
                await mongodbClient.db('users-list').collection('users').insertOne(newUserObject);
                return 'User created successfully';
            } catch (err) {
                throw new GenericError();
            }
        } else {
            /* If user already exists */
            throw new UserExistsError();
        }

    } catch (err) {
        throw err;
    }
}