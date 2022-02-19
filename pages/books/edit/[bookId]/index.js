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

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <main>
      <Head>
        <title>Editing a Book</title>
      </Head>
      <AddEditBook book={book} />
    </main>
  );
};

// export const getPaths = async () => {
//   const paths = [
//     {
//       params: {
//         bookId: '620b6c0f011912456d453290',
//       },
//     },
//     {
//       params: {
//         bookId: '620b6c0f011912456d45328c',
//       },
//     },
//     {
//       params: {
//         bookId: '620b6c0f011912456d45329c',
//       },
//     },
//     {
//       params: {
//         bookId: '620b6c0f011912456d453288',
//       },
//     },
//   ];
//   return {
//     fallback: 'blocking',
//     paths: paths,
//   };
// };

export const getServerSideProps = async (context) => {
  const { bookId } = context.params;
  const book = await fetchOneBook(bookId);

  return {
    props: {
      book,
    },
  };
};

export default EditBook;
