const { Router } = require("express");
const bookRouter = Router();

const {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
} = require("./controllers");

bookRouter.get("/books/getAllBooks", getAllBooks);
bookRouter.post("/books/addBook", addBook);
bookRouter.put("/books", updateBook);
bookRouter.delete("/books", deleteBook);

module.exports = bookRouter;
