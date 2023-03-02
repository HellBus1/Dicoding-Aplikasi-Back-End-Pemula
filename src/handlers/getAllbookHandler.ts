import type Hapi from '@hapi/hapi';
import books from "../books";
import { BookModel } from '../model';

const getAllBooksHandler = (request: Hapi.Request<Hapi.ReqRefDefaults>,
  h: Hapi.ResponseToolkit<Hapi.ReqRefDefaults>) => {
  const { name, reading, finished } = request.query;

  let filteredBooks: BookModel[] = [];
  if (name !== undefined) {
    books.forEach((obj) => {
      if (obj.name?.toLowerCase().includes(name.toLowerCase())) {
        filteredBooks.push(obj);
      }
    });
  } else if (reading !== undefined) {
    books.forEach((obj) => {
      if (+obj.reading == reading) {
        filteredBooks.push(obj);
      }
    });
  } else if (finished !== undefined) {
    books.forEach((obj) => {
      if (+obj.finished == finished) {
        filteredBooks.push(obj);
      }
    });
  } else {
    filteredBooks = books;
  }

  const response = h.response({
    status: 'success',
    data: {
      books: filteredBooks.map((obj) => ({
        "id": obj.id,
        "name": obj.name,
        "publisher": obj.publisher
      })),
    },
  });

  response.code(200);
  return response;
};

export default getAllBooksHandler;