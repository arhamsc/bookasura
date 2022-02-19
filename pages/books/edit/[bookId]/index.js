import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import AddEditBook from '../../../../components/Functional/AddEditBooks/AddEditBook/AddEditBook';
import {
  fetchOneBook,
  fetchAllBooks,
} from '../../../../helpers/from-end/products_prop_funcs';
import { isAuth } from '../../../../helpers/from-end/is_auth';
import Head from 'next/head';

const EditBook = ({ book }) => {
  const user = useSelector((state) => state.user);
  const router = useRouter();
  const isAuthenticated = isAuth();

  useEffect(() => {
    if (user.role !== 'admin' || !isAuthenticated) {
      router.replace('/auth');
    }
  }, [user, router, isAuthenticated]);
  return (
    <main>
      <Head>
        <title>Editing a Book</title>
      </Head>
      <AddEditBook book={book} />
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

  return {
    props: {
      book,
    },
    revalidate: 43200,
  };
};

export default EditBook;
