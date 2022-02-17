import React from 'react';

import Heading from '../../../ChildComponents/Header/Heading';

const NonFictionHeading = ({
  totalBooks,
  availableDropdownHandler,
  sortOptionHandler,
}) => {
  return (
    <Heading
      title={'Non-Fiction'}
      subtitle={
        'Love to take a realistic look on the world? Don\'t worry, we have you covered. '
      }
      availableDropdownHandler={availableDropdownHandler}
      totalBooks={totalBooks}
      sortOptionHandler={sortOptionHandler}
    />
  );
};

export default NonFictionHeading;
