import React from 'react';

import Heading from '../../../ChildComponents/Header/Heading';

const MangaHeading = ({
  totalBooks,
  availableDropdownHandler,
  sortOptionHandler,
}) => {
  return (
    <Heading
      title={'Manga'}
      subtitle={
        'You are a Cultural Fanatic? Let\'s take a look at our awesome top rated manga collection. '
      }
      availableDropdownHandler={availableDropdownHandler}
      totalBooks={totalBooks}
      sortOptionHandler={sortOptionHandler}
    />
  );
};

export default MangaHeading;
