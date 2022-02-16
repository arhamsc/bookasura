import React from 'react';
import Head from 'next/head';
import { fetchAllBooks } from '../helpers/from-end/products_prop_funcs';

import MangaHeading from '../components/Functional/Manga/MangaHeader';
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
        <title>Manga</title>
        <meta
          name="description"
          content="View the manga collection at bookasura"
        />
      </Head>
      <MangaHeading
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
  const onlyManga = allBooks.filter((book) => book.category === 'Manga');
  const totalManga = onlyManga.length;
  return {
    props: {
      books: onlyManga,
      totalBooks: totalManga,
    },
  };
};

export default NonFictionBooks;
