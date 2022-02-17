import React from 'react';
import { useDispatch } from 'react-redux';
import BookDetailsMain from '../../../components/Functional/BookDetails/BookDetailsMain/BookDetailsMain';
import InterestedBooks from '../../../components/Functional/BookDetails/InterestedBooks/InterestedBooks';
import { cartActions } from '../../../context/context-slices/cart-slice';
import {
  fetchAllBooks,
  fetchOneBook,
} from '../../../helpers/from-end/products_prop_funcs';

const BookDetails = ({ book, books }) => {
  const dispatch = useDispatch();

  const onAddToCartHandler = (cartItem) => {
    dispatch(cartActions.addItemToCart(cartItem));
  };
  return (
    <main>
      <BookDetailsMain book={book} onAddToCartHandler={onAddToCartHandler}/>
      <InterestedBooks books={books} />
      <div
        style={{
          padding: '2rem 0',
        }}
      ></div>
    </main>
  );
};

export const getStaticPaths = async () => {
  const { books } = await fetchAllBooks();
  return {
    fallback: 'blocking',
    paths: books.map((book) => ({
      params: {
        bookId: book._id.toString(),
      },
    })),
  };
};

export const getStaticProps = async (context) => {
  const { bookId } = context.params;
  const book = await fetchOneBook(bookId);
  const { books } = await fetchAllBooks();
  return {
    props: {
      book,
      books,
    },
    revalidate: 43200,
  };
};

export default BookDetails;
