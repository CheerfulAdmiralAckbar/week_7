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

const getBookByTitle = async (request, response) => {
  const book = await Book.findOne({ title: request.params.title });

  const successResponse = {
    message: "success",
    book: book,
  };

  response.send(successResponse);
};

const dynamicBookUpdate = async (request, response) => {
  const { title, ...updates } = request.body;

  // If title is not provided, return an error
  if (!title) {
    return response.status(400).send({ message: "title is required" });
  }

  // Find book by title and then update the values with the provided updates
  const updateResponse = await Book.updateOne(
    { title: title },
    { $set: updates }
  );

  // If no book is found, return a 404 error
  if (updateResponse.matchedCount === 0) {
    return response.status(404).send({ message: "Book not found" });
  }

  const successResponse = {
    message: "success",
    book: updateResponse,
  };

  response.send(successResponse);
};

const deleteAllBooks = async (request, response) => {
  const deleteAllBooks = await Book.deleteMany({});

  const successResponse = {
    message: "success",
    books: deleteAllBooks,
  };

  response.send(successResponse);
};

module.exports = {
  getAllBooks: getAllBooks,
  addBook: addBook,
  updateBook: updateBook,
  deleteBook: deleteBook,
  getBookByTitle: getBookByTitle,
  dynamicBookUpdate: dynamicBookUpdate,
  deleteAllBooks: deleteAllBooks,
};
