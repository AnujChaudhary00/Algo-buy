# Algo-buy

##Getting Started
To get the Node server running locally:

-Clone this repo
-`npm install` to install all required dependencies
-`npm start`to start the local server.


# Code Overview

## Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [express-jwt](https://github.com/auth0/express-jwt) - Middleware for validating JWTs for authentication
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - For generating JWTs used by authentication
- [bcryptjs] (https://github.com/auth0/node-bcrypt) - For hasing the passwords
- [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to javascript 
- [jest] - For unit testing
- [morgan] - For loggin the requests
- [nodemon] - For monitoring the application and auto starting, after saving change. 
- [dotenv] - For loading enviromental variables.

## Application Structure

- `app.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
- `helper/` - This folder contains files for error handling and checiking api authorization.
- `routes/` - This folder contains the route definitions for our API.
- `models/` - This folder contains the schema definitions for our Mongoose models.

## Error Handling

In `helper/error-handeling.js`, we define a error-handling middleware for handling express's `Authorization and authentication Error`. This middleware will respond with a 402, 500, 404 status code and format the response to have [error messages the clients can understand]

## Authentication

Requests are authenticated using the `Authorization` header with a valid JWT. We define two express api's in `helper/jwt.js` that can be used to authenticate requests. The `jwt` middlwre using our application's secret and will return a 401 status code if the request cannot be authenticated. The payload of the JWT can then be accessed from `req.payload` in the endpoint.


<br />
