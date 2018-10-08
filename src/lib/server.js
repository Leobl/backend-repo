//This is where we are going to set up our server and connect it to MongoDB:

'use strict'

//Importing our npm packages
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

//Setting up our express router
const app = express();
const router = express.Router();

// env variables
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mern-starter';

//Connecting to mongoose
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

//Requiring-in our routes and middleware
app.use(bodyParser.json(),cors())

app.use(require('../route/auth-router'));

app.all('*', (request, response) => {
  console.log('Returning a 404 from the catch-all route');
  return response.sendStatus(404);
});

// error middleware
app.use(require('./error-middleware'));

//Export the start and stop variables that turn our server off and on and log what PORT we are on
export const start = () => {
  app.listen(PORT, () =>{
    console.log(`Listening on port: ${PORT}`)
  })
}

//Export the start and stop variables that turn our server off and on and log what PORT we are on
export const stop = () => {
  app.close(PORT, () => {
    console.log(`Shut down on port: ${PORT}`)
  })
}