import books from '../data/books.js';

export const getAllBooks = (request, h) => {
  const { reading, finished, name } = request.query;

  const isReading = reading === '1';
  const isFinished = finished === '1';

  const filteredBooks = books.filter((book) => {
    if (reading !== undefined && book.reading !== isReading) {
      return false;
    }

    if (finished !== undefined && book.finished !== isFinished) {
      return false;
    }

    if (name !== undefined && !book.name.toLowerCase().includes(name.toLowerCase())) {
      return false;
    }

    return true;
  }).map((book) => ({
    id: book.id,
    name: book.name,
    publisher: book.publisher,
  }));

  const response = h.response({
    status: 'success',
    data: {
      books: filteredBooks,
    },
  });
  response.code(200);
  return response;
};

export const getBookById = (request, h) => {
  const { bookId } = request.params;

  const book = books.filter((b) => b.id === bookId)[0];

  if (book !== undefined) {
    return {
      status: 'success',
      data: {
        book: book,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  response.code(404);
  return response;
};

