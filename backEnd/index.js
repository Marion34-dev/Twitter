import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";
import { Login } from './routes/login.route.js';
import { Register } from './routes/register.route.js';
import { allPeeps } from "./routes/allPeeps.route.js";
import { addPeep } from "./routes/addPeep.route.js";
// import User from './models/user.model.js';
import session from 'express-session';
import crypto from 'crypto'; // generating random strings


config({ path: `.env.${process.env.NODE_ENV}` });

const port = process.env.PORT;
const host = process.env.HOST;
const app = express(); // creates a server

const main = async () => {  // connects to DB
  console.log(`Connecting to ${process.env.DB_URI}`);
  await mongoose.connect(process.env.DB_URI);
  console.log(`Successfully connected to ${process.env.DB_URI}`);
};


main().catch((err) => console.log(err));  // error handling if connection unsuccessful

// Express middleware
app.use(express.json()); // configuring it to parse incoming requests with JSON payloads
app.use(cors()); // allowing server to respond to requests from different origins

// Configure the session middleware
const secretKey = crypto.randomBytes(32).toString('hex'); // 32-byte random string encoded in hexadecimal format

app.use(
  session({
    secret: secretKey, // session ID cookie
    resave: false,  // only saving when asked, not on each request
    saveUninitialized: false, // not saving each new unmodified sessions
  })
);

// Authentication Routes
app.use('/login', Login);
app.use('/register', Register);

// Routes
app.use(`/`, allPeeps);
app.use(`/add`, addPeep);


const server = app.listen(port, host, () => {       //returns a server
  const SERVERHOST = server.address().address;      // defines the URL
  const SERVERPORT = server.address().port;         // defines the port
  console.log(`Server is listening at http://${SERVERHOST}:${SERVERPORT}`);
});

export default server;
