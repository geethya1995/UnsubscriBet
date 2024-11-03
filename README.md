# UnsubscriBet

Demo platform to manage customer preferences on their subscriptions on SportsBet newsletter.

API Documentation
See here for API Documentation

## Features

🔒 - Auth required

🔒 Subscribe to newsletter<br/>
🔒 Unsubscribe from newsletter

## Dependancies

- Node v12.x.x or higher
- MongoDB v5.x.x or higher
- Typescript v3.9.x or higher

## How to Setup

- Fork the repository in the GitHub
- Clone the project into your local computer
- Set up .env.development.sample file in root directory and rename to .env.development file

- Run following commands
  - npm install
  - npm test
  - npm start

## Authorization

{Authorization: Bearer }
Secure routes are implemented using JWT.  
The user subscribes, and a user acoount is created. Also a JSON web token is assigned to the user.  
This token is sent by the user via the URL while trying to unsubscribe. Implemented to enable secure routes
Once the token has been verified, the user is then allowed to access the secure routes.
Enhanced security using JWT

## Choice of Technology

### Nodejs

- This app does not require heavy processing
- Have more I/O operations

### MongoDB

- Adding more fields to a schema is less time consuming

### Typescript

- Class and Module Support
- Static Type-checking
- ES6 Feature Support

## Improvements

- Enhanced security
- Language localization
- Integrated test suite
