import React from 'react';
import Head from 'next/head';
import { fetchAllBooks } from '../helpers/from-end/products_prop_funcs';

import NonFictionHeading from '../components/Functional/MainPages/NonFictionBooks/NonFictionBooksHeader';
import useSort from '../hooks/sort_hook';
import useAvailability from '../hooks/availability_hook';
import AllBooksCards from '../components/ChildComponents/AllBooksCards/AllBooksCards';

const NonFictionBooks = ({ books, totalBooks }) => {
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
        <title>Non Fiction Books</title>
        <meta
          name="description"
          content="View the non fictional books collection at bookasura"
        />
      </Head>
      <NonFictionHeading
        totalBooks={totalBooks}
        availableDropdownHandler={filterAvailableBooks}
        sortOptionHandler={sortBooksHandler}
      />
      <AllBooksCards books={updatedBooks} />
    </main>
  );
};
export const getServerSideProps = async () => {
  const { books: allBooks } = await fetchAllBooks();
  const onlyNonFiction = allBooks.filter(
    (book) => book.category === 'Non-Fiction',
  );
  const totalNonFicBooks = onlyNonFiction.length;
  return {
    props: {
      books: onlyNonFiction,
      totalBooks: totalNonFicBooks,
    },
  };
};

export default NonFictionBooks;
