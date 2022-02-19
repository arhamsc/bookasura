import axios from 'axios';
import Book from '../../models/front_end/product';
import { requestUrl } from '../../db/domain_url';

export const fetchAllBooks = async () => {
  const response = await axios.get(requestUrl('api/products'));
  const books =
    response.data.products.map((book) =>
      new Book(
        book._id,
        book.name,
        book.price,
        book.description,
        book.category.name,
        book.imageUrl,
        book.inventory.quantity,
      ).getBook(),
    ) ?? [];
  const totalBooks = response.data.totalQuantity;
  return { books, totalBooks };
};

export const fetchOneBook = async (bookId) => {
  const { data } = await axios.get(requestUrl(`api/products/${bookId}`));
  const book = new Book(
    data._id,
    data.name,
    data.price,
    data.description,
    data.category.name,
    data.imageUrl,
    data.inventory.quantity,
  ).getBook();
  return book;
};
