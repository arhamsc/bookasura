import React from 'react';

import SubPageTitle from '../SubPageTitle/SubPageTitle';
import SubPageFilter from '../SubPageFilter/SubPageFilter';

const Heading = ({
  totalBooks,
  availableDropdownHandler,
  sortOptionHandler,
  title,
  subtitle
}) => {
  return (
    <section
      style={{
        fontWeight: '300',
      }}
    >
      <SubPageTitle
        title={title}
        // eslint-disable-next-line react/jsx-key
        subtitle={subtitle}
      />
      <SubPageFilter
        totalBooks={totalBooks}
        availableDropdownHandler={availableDropdownHandler}
        sortOptionHandler={sortOptionHandler}
      />
    </section>
  );
};

export default Heading;
