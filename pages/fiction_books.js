import React from 'react';
import Head from 'next/head';
import { fetchAllBooks } from '../helpers/from-end/products_prop_funcs';

import FictionHeading from '../components/Functional/FictionBooks/FictionBooksHeader';
import useSort from '../hooks/sort_hook';
import useAvailability from '../hooks/availability_hook';
import AllBooksCards from '../components/ChildComponents/AllBooksCards/AllBooksCards';

const FictionBooks = ({books, totalBooks}) => {
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
        <title>Fiction Books</title>
        <meta
          name="description"
          content="View the fictional books collection at bookasura"
        />
      </Head>
      <FictionHeading
        totalBooks={totalBooks}
        availableDropdownHandler={filterAvailableBooks}
        sortOptionHandler={sortBooksHandler}
      />
      <AllBooksCards books={updatedBooks} />
    </main>
  );
};

export const getStaticProps = async () => {
  const { books: allBooks } = await fetchAllBooks();
  const onlyFiction = allBooks.filter((book) => book.category === 'Fiction');
  const totalFicBooks = onlyFiction.length;
  return {
    props: {
      books: onlyFiction,
      totalBooks: totalFicBooks,
    },
  };
};

export default FictionBooks;
