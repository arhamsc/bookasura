import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import BookDetailsMain from '../../../components/Functional/BookDetails/BookDetailsMain/BookDetailsMain';
import InterestedBooks from '../../../components/Functional/BookDetails/InterestedBooks/InterestedBooks';
import { cartActions } from '../../../context/context-slices/cart-slice';
import { requestUrl } from '../../../db/domain_url';
import { isAuth } from '../../../helpers/from-end/is_auth';
import {
  fetchAllBooks,
  fetchOneBook,
} from '../../../helpers/from-end/products_prop_funcs';

const BookDetails = ({ book, books }) => {
  const router = useRouter();

  const dispatch = useDispatch();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  const isAuthenticated = isAuth();

  const onAddToCartHandler = (cartItem) => {
    if (!isAuthenticated) {
      return;
    }
    dispatch(cartActions.addItemToCart(cartItem));
  };

  const deleteBookHandler = async (bookId) => {
    try {
      await axios.delete(requestUrl(`api/products/${bookId}`), {
        'Content-Type': 'application/json',
      });
    } catch (_) {
      return;
    }
  };

  return (
    <main>
      <Head>
        <title>{book.name}</title>
        <meta name="description" content={book.description} />
      </Head>
      <BookDetailsMain
        book={book}
        onAddToCartHandler={onAddToCartHandler}
        canAddToCart={isAuthenticated}
        onDeleteHandler={deleteBookHandler}
      />
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
  const paths = [
    {
      params: {
        bookId: '620b6c0f011912456d453290',
      },
    },
    {
      params: {
        bookId: '620b6c0f011912456d45328c',
      },
    },
    {
      params: {
        bookId: '620b6c0f011912456d45329c',
      },
    },
    {
      params: {
        bookId: '620b6c0f011912456d453288',
      },
    },
  ];
  return {
    fallback: 'blocking',
    paths: paths,
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
