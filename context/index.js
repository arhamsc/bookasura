import { configureStore } from '@reduxjs/toolkit';

import booksSlice from './context-slices/books_slice';

const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
  },
});

export default store;
