const { Router } = require("express");
const bookRouter = Router();

const {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
  getBookByTitle,
  dynamicBookUpdate,
  deleteAllBooks,
} = require("./controllers");

bookRouter.get("/books/getAllBooks", getAllBooks);
bookRouter.post("/books/addBook", addBook);
bookRouter.put("/books", updateBook);
bookRouter.delete("/books", deleteBook);
bookRouter.put("/books/dynamicUpdate", dynamicBookUpdate);
bookRouter.get("/books/book/:title", getBookByTitle);
bookRouter.delete("/books/deleteAllBooks", deleteAllBooks);

module.exports = bookRouter;
