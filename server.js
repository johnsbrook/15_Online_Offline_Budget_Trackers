// Declared dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

// Declared PORT at 3000
const PORT = 3000;

// Declared app to express() method
const app = express();

// Asked app to use logger("dev"), compression(), express urlencoded extended to true, json() and express static() to public;
app.use(logger("dev"));
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(json());
app.use(express.static("public"));

// Created mongoose db connection


// Established route


// Created app listener to run on port 3000