require("dotenv").config();
const express = require("express");

const connection = require("./db/connection");

const Book = require("./books/model");

const bookRouter = require("./books/routes");

const app = express();

app.use(express.json());

console.log("HELLO_WORLD: " + process.env.HELLO_WORLD);

connection();

app.use(bookRouter);

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
