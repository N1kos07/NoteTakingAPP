# Note Taking App

A simple note-taking application built with Node.js, Express, MongoDB, and JavaScript.


## Features

- Sign in with Google
- Create notes
- Edit existing notes
- Delete notes
- Save notes to MongoDB
- Each user can see only their own notes
- Logout functionality
- Simple note count and note selection interface


## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- JavaScript
- HTML
- CSS
- Passport.js
- Google OAuth 2.0
- Mocha
- Chai


## How to Run the Project

1. Clone or download the project

2. Install the dependencies (with npm install)

3. Create a .env file and add the require environment variables for MongoDB, Google OAuth, and the session secret

4. Start the server (node index.js)

5. Open the application in your browser


## Testing

Run the test with:
- npm test

The current tests cover basic controller validation and error handling.


## Project Structure

noteTakingApp/

    config/
        passport.js

    controllers/
        noteController.js

    models/
        Note.js
        User.js

    public/
        styles.css

    routes/ 
        authRoutes.js
        noteRoutes.js

    tests/
        noteController.test.js

    views/
        index.ejs

    index.js
    package.json
    README.md


## Reflection

This project helped me understand how the different parts of a full-stack application work together. I learned how to build REST API routes with Express, connect an application to MongoDB using Mongoose as middleware, and separate routes, controllers, and models.

I also learned how to use EJS to render a frontend from an Express server and how frontend actions such as creating, editing, and deleting notes communicate with the backend.

One of the biggest new concepts for me was authentication. I implemented Google OAuth using Passport.js and learned how sessions can keep track of a logged-in user. I also learned that authentication and data ownership are separate concepts, and I had to make sure each note was connected to the user who created it. 

I also practiced writing basic tests with Mocha and Chai, and learned how valication and error handling help make an application more reliable. 

Overall, this project gave me a much better understanding of how a complete web application is structured and how the frontend, backend, database, authentication, and testing all work together. 