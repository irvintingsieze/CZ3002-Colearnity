﻿# CZ3002-Colearnity

This is our project for CZ3002 - Advanced Software Engineering. It is a forum that enables students and teachers alike to discuss the curriculum topics. It uses React.js as the frontend and Node.js/Express.js as the backend server, with MongoDB as the database.

### To run this project,

Use `git clone` to clone this repository.

Run `npm install` to install the node modules in both the frontend and the backend folder.

1. Navigate to the /backend folder
2. `npm install`
3. Navigate to the /frontend folder
4. `npm install`

## Running the website

Then, run the frontend and backend separately using `npm start`. Run the backend server first, which will run on port 3000.

When running `npm start` for the frontend, it will prompt to run on another port (3001) as port 3000 is taken by the backend server. Enter 'Y'.

This website only allows students to sign up. If you are a student, simply sign up and login.

If you are a teacher, your account will be pre-configured in the database to avoid any random user from signing up as teachers, as they have extra permissions.

We created an account in advance for you to use the website as a teacher:

```
username: teacher01
email: teacher01@gmail.com
password: 123456
```

That's all! :)

## Testing

Our automated test cases are in the /backend/test folder. To run them, navigate to the backend folder and run `npm run test`.

## Documentation

Our API endpoints are documented here: https://documenter.getpostman.com/view/12956554/TVendoF4
