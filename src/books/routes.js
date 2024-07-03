const { Router } = require("express");
const bookRouter = Router();

const {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
  getBookByTitle,
} = require("./controllers");

bookRouter.get("/books/getAllBooks", getAllBooks);
bookRouter.post("/books/addBook", addBook);
bookRouter.put("/books", updateBook);
bookRouter.delete("/books", deleteBook);
bookRouter.get("/books/book/:title", getBookByTitle);

module.exports = bookRouter;
