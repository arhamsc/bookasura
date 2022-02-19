import Head from 'next/head';
import React from 'react';
import AllBooksCards from '../components/ChildComponents/AllBooksCards/AllBooksCards';

import AllBooksHeading from '../components/Functional/MainPages/AllBooks/AllBooksHeader';
import { fetchAllBooks } from '../helpers/from-end/products_prop_funcs';
import useAvailability from '../hooks/availability_hook';
import useSort from '../hooks/sort_hook';

const AllBooks = ({ books, totalBooks }) => {
  const { sortBooks, sortedBooks } = useSort(books);
  const { filterBooks, books: updatedBooks } = useAvailability(sortedBooks);

  const filterAvailableBooks = async (availableFilter) => {
    await filterBooks(availableFilter);
  };
  const sortBooksHandler = async (sortType) => {
    sortBooks(sortType);
  };
  return (
    <main>
      <Head>
        <title>All Books</title>
        <meta
          name="description"
          content="View the full collection at bookasura"
        />
      </Head>
      <AllBooksHeading
        totalBooks={totalBooks}
        availableDropdownHandler={filterAvailableBooks}
        sortOptionHandler={sortBooksHandler}
      />
      <AllBooksCards books={updatedBooks} />
    </main>
  );
};

export const getServerSideProps = async () => {
  const { books, totalBooks } = await fetchAllBooks();
  return {
    props: {
      books,
      totalBooks,
    },
  };
};

export default AllBooks;
