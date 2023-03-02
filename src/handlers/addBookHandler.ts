import type Hapi from '@hapi/hapi';
import { nanoid } from 'nanoid';
import books from '../books';
import type { AddBookPayload, BookModel } from '../model';

const addBookHandler = (request: Hapi.Request<Hapi.ReqRefDefaults>,
  h: Hapi.ResponseToolkit<Hapi.ReqRefDefaults>) => {
  const reqBody = <AddBookPayload>request.payload;

  if (reqBody.name === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });

    response.code(400);
    return response;
  }

  if (reqBody.readPage > reqBody.pageCount) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });

    response.code(400);
    return response;
  }

  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const finished = reqBody.pageCount === reqBody.readPage;

  const newBook: BookModel = {
    ...reqBody,
    finished: finished,
    id: id,
    insertedAt: insertedAt,
    updatedAt: updatedAt
  };

  books.push(newBook);
  const isSuccess = books.filter((book) => book.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    });
    response.code(201);
    return response;
  } else {
    const response = h.response({
      status: 'fail',
      message: 'Buku gagal ditambahkan',
    });

    response.code(500);
    return response;
  }
};

export default addBookHandler;