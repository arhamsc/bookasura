import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import booksSlice from './context-slices/books_slice';

const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
  },
});
export const wrapper = createWrapper(store, {debug:true});
export default store;
