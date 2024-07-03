require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const connection = require("./db/connection");

const app = express();

app.use(express.json());

console.log("HELLO_WORLD: " + process.env.HELLO_WORLD);

connection();

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
  },
});

const Book = mongoose.model("Book", bookSchema);

app.get("/books/getAllBooks", async (request, response) => {
  const books = await Book.find();
  response.send(books);
});

app.post("/books/addBook", async (request, response) => {
  const book = await Book.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });

  const successResponse = {
    message: "success",
    book: book,
  };

  response.send(successResponse);
});

// Update Book by title
app.put("/books", async (request, response) => {
  console.log(request.body);
  const updateAuthorByTitle = await Book.updateOne(
    { title: request.body.title },
    { author: request.body.author }
  );

  const successResponse = {
    message: "success",
    book: updateAuthorByTitle,
  };
  response.send(successResponse);
});

// Delete Book by title
app.delete("/books", async (request, response) => {
  const deleteBookByTitle = await Book.deleteOne({ title: request.body.title });

  const successResponse = {
    message: "success",
    book: deleteBookByTitle,
  };
  response.send(successResponse);
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
