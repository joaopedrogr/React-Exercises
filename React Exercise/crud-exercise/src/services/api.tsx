import axios from 'axios';
const api = axios.create({
   baseURL: 'http://localhost:3001'
});
export const getBook = () => api.get('/book');
export const getBookById = (id: string) => api.get(`/book/${id}`);
export const createBook = (book: any) => api.post('/book', book);
export const updateBook = (id: string, book: any) => api.put(`/book/${id}`, book);
export const deleteBook = (id: string) => api.delete(`/book/${id}`);