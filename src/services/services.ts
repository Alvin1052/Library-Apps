import api from './api';

export const getRestaurant = async () => {
  const res = await api.get('/resto');
  return res.data;
};

export const getProfile = async () => {
  const res = await api.get('/me');

  return res.data;
};

export const getRecommendBook = async () => {
  const res = await api.get('/books/recommend?by=rating&limit=50');
  return res.data;
};

export const getAuthor = async () => {
  const res = await api.get('/authors');
  return res.data;
};

export const getBooksByAuthor = async (authorId: number) => {
  const res = await api.get(`/authors/${authorId}/books`);
  return res.data;
};

export const getBooksById = async (bookId: number) => {
  const res = await api.get(`/books/${bookId}`);
  return res.data;
};

type BookFilter = {
  keyword?: string;
  categoryId?: number | null;
  authorId?: number | null;
  page?: number;
  limit?: number;
};
// '/books?q=h&categoryId=1&authorId=4&page=1&limit=20'
// /books?categoryId=1&authorId=4&page=1&limit=20
export const getBooksByFilter = async ({
  keyword,
  categoryId,
  authorId,
  page = 1,
  limit = 20,
}: BookFilter) => {
  const res = await api.get(
    `/books?${keyword && `q=${keyword}&`}${
      categoryId && `categoryId=${categoryId}&`
    }${authorId && `authorId=${authorId}&`}page=${page}&limit=${limit}`
  );
  return res.data;
};
