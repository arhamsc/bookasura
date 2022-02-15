import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    totalBooks: 0,
  },
  reducers: {
    replaceBooks(state, action) {
      state.totalBooks = action.payload.totalBooks;
      state.books = action.payload.books;
    },
  },
});

export const booksActions = booksSlice.actions;

export default booksSlice;