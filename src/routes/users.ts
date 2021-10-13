import express from 'express';

import { getUsers, addNewUser } from '../db-connection/db.utils';

const router = express.Router();

/* Route for GET method on /users. Returns list of all users in the database. */
router.get('/users-management/users', async (req, res, next) => {
    try {
        const result = await getUsers();
        res.status(200).send(result);
    } catch (err) {
        next(err);
    }
});

/* 
Route for POST method on /users. 
Adds a new user to the database if a user with the provided email does not exist. 
*/
router.post('/users-management/users', async (req, res, next) => {
    try {
        const { firstName, lastName, email, dateOfBirth } = req.body;
        const result = await addNewUser({
            firstName: firstName,
            lastName: lastName,
            email: email,
            dateOfBirth: dateOfBirth
        });
        res.status(200).send({ message: result });
    } catch (err) {
        next(err);
    }
});

export { router as usersRouter };
