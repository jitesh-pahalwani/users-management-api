# users-management-api
An API for a simple users management app. Built using NodeJS.

![Users Management App](./readme-video/recording1.gif)

## Features
- API to add user to the database. Validates on uniqueness of email address.
- MongoDB Cloud is used for Database.
- Proper error handling.
- Built using Typescript.

## How to run
1. Run the following commands to clone the repository and move to the cloned directory
```
git clone https://github.com/jitesh-pahalwani/users-management-api.git
cd users-management-api
npm install
```
2. Create a .env file with the following variables in it. (Contact the author for the username and password of his MongoDB instance used in this project)
- PORT_NUMBER (preferably 4000)
- MONGODB_USERNAME (username of MongoDB instance)
- MONGODB_PASSWORD (password of MongoDB instance)

3. Finally run the project
```
npm run start
```

## Request and Response
For /users-management/users GET method
```
GET
localhost:4000/users-management/users
```
```
[
    {
        "_id": "61656ba19369c98a9eb47b7a",
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@gmail.com",
        "dateOfBirth": "1991-10-15T18:30:00.000Z"
    },
    {
        "_id": "61656f429369c98a9eb47b7c",
        "firstName": "Jill",
        "lastName": "Smith",
        "email": "jill.smith@gmail.com",
        "dateOfBirth": "1993-05-03T18:30:00.000Z"
    },
    {
        "_id": "6165ba3d813d6623ce02cfdd",
        "firstName": "Ben",
        "lastName": "Stiller",
        "email": "ben.stiller@gmail.com",
        "dateOfBirth": "Sat May 09 1992 00:00:00 GMT+0530 (India Standard Time)"
    }
]
```

For /users-management/users POST method
```
POST
localhost:4000/users-management/users

{
    "firstName": "Jeffrey",
    "lastName": "Bezos",
    "email": "jeff.bezos@gmail.com",
    "dateOfBirth": "1992-05-08T18:30:00.000Z"
}
```
```
{
    "message": "User created successfully"
}
```