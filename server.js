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
// App will connect to mongodb://localhost/budget 
// App will have useNewUrlParser to true and useFindAndModify to false
mongoose.connect("mongodb://localhost/budget", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// Established route to require api.js; comment the api route; then uncomment once the file has been built and debugged
// app.use(require("./routes/api.js"));

// Created app listener to run on port 3000
app.listen(PORT, () => {
    `App is running on PORT ${PORT}. Click on this link to open app: http://localhost:${PORT}`;
});