const Book = require("./model");

const getAllBooks = async (request, response) => {
  const books = await Book.find({});

  const successResponse = {
    message: "success",
    books: books,
  };

  response.send(successResponse);
};

const addBook = async (request, response) => {
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
};

const updateBook = async (request, response) => {
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
};

const deleteBook = async (request, response) => {
  const deleteBookByTitle = await Book.deleteOne({ title: request.body.title });

  const successResponse = {
    message: "success",
    book: deleteBookByTitle,
  };
  response.send(successResponse);
};

module.exports = {
  getAllBooks: getAllBooks,
  addBook: addBook,
  updateBook: updateBook,
  deleteBook: deleteBook,
};
