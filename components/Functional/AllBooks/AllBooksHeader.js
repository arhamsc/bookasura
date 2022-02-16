/* eslint-disable react/jsx-key */
import React from 'react';

import Heading from '../../ChildComponents/Header/Heading';

const AllBooksHeading = ({
  totalBooks,
  availableDropdownHandler,
  sortOptionHandler,
}) => {
  return (
    <Heading
      title={'All Books'}
      subtitle={['Take a look at our ', <i>Bookasura</i>, ' collection. ']}
      availableDropdownHandler={availableDropdownHandler}
      totalBooks={totalBooks}
      sortOptionHandler={sortOptionHandler}
    />
  );
};

export default AllBooksHeading;
