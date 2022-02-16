import axios from "axios";
import Book from "../../models/front_end/product";
import { requestUrl } from "../../db/domain_url";

export const fetchAllBooks = async () => {
  const response = await axios.get(requestUrl('api/products'));
  const books = response.data.products.map((book) =>
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
  const totalBooks = response.data.totalQuantity;
  return {books, totalBooks};
}