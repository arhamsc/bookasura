import { booksActions } from '../context-slices/books_slice';
import axios from 'axios';

import Book from '../../models/front_end/product';
import { requestUrl } from '../../db/domain_url';

export const fetchAllBooks = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(requestUrl('api/products'));
      const books = response.data.map((book) =>
        new Book(
          book._id,
          book.name,
          book.price,
          book.description,
          book.category.name,
          book.imageUrl,
          book.inventory.quantity,
        ).getBook(),
      );
          console.log(books)
      const totalBooks = books.reduce(
        (acc, curr) => acc.inventory + curr.inventory,
      );
      console.log(totalBooks);
      dispatch(
        booksActions.replaceBooks({
          books,
          totalBooks,
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };
};
