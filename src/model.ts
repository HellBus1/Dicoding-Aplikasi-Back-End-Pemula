interface AddBookPayload {
  name: string | undefined;
  year: number;
  author: string;
  summary: string;
  publisher: string;
  pageCount: number;
  readPage: number;
  reading: boolean;
}

interface BookModel extends AddBookPayload {
  id: string;
  finished: boolean;
  insertedAt: string;
  updatedAt: string;
}

export { BookModel, AddBookPayload };
