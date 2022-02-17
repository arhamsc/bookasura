/* eslint-disable react/jsx-key */
import React from 'react';

import Heading from '../../../ChildComponents/Header/Heading';

const FictionHeading = ({
  totalBooks,
  availableDropdownHandler,
  sortOptionHandler,
}) => {
  return (
    <Heading
      title={'Fiction'}
      subtitle={
        'Take a look at our fictional collection to soothe the wandering soul. '
      }
      availableDropdownHandler={availableDropdownHandler}
      totalBooks={totalBooks}
      sortOptionHandler={sortOptionHandler}
    />
  );
};

export default FictionHeading;
