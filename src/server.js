const express = require("express");

const app = express();

app.use(express.json());

const fakeData = [
  {
    id: 1,
    title: "Book1",
    author: "Author1",
    genere: "Genre1",
  },
  {
    id: 2,
    title: "Book2",
    author: "Author2",
    genere: "Genre2",
  },
  {
    id: 3,
    title: "Book3",
    author: "Author3",
    genere: "Genre3",
  },
];
app.get("/books", (request, response) => {
  response.send("Hello from /books");
});

app.get("/books/getAllBooks", (request, response) => {
  const successResponse = {
    message: "success",
    books: fakeData,
  };

  response.send(successResponse);
});

app.post("/books/addBook", (request, response) => {
  fakeData.push(request.body);

  const successResponse = {
    message: "success",
    books: fakeData,
  };
  response.send(successResponse);
});

app.put("/books", (request, response) => {
  const { title, newAuthor } = request.body;

  // If user doesn't provide a new author then it should fail.
  if (!newAuthor) {
    const errorResponse = {
      message: "No author provided",
    };

    return response.send(errorResponse);
  }

  // Get the id of the book by finding the index where the book.title is the same as body.title
  const bookId = fakeData.findIndex((book) => book.title === title);

  // If the bookId is equal to anything but -1 it means a book has been found
  if (bookId !== -1) {
    // Change the value of fakeData.author to new Author where the id of that object is the same as bookId
    fakeData[bookId].author = newAuthor;

    const successResponse = {
      message: "succes",
      books: fakeData,
    };
    response.send(successResponse);
  } else {
    const failureResponse = {
      message: "No book with the title provided",
    };
    response.send(failureResponse);
  }
});

app.delete("/books", (request, response) => {
  // in here find a book by title
  // remove (delete) the element from the array
  const { title } = request.body;

  // Get the id of the book by finding the index where the book.title is the same as body.title
  const bookId = fakeData.findIndex((book) => book.title === title);

  // If the bookId is equal to anything but -1 it means a book has been found
  if (bookId !== -1) {
    // Remove the object from the array where the id is bookId
    fakeData.splice(bookId, 1);
    const successResponse = {
      message: "success",
      books: fakeData,
    };
    response.send(successResponse);
  } else {
    const failureResponse = {
      message: "No book with the title provided",
    };
    response.send(failureResponse);
  }
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
