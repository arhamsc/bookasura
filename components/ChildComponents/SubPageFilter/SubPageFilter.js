import React from 'react';
import { useSelector } from 'react-redux';

import styles from './SubPageFilter.module.css';

import AvailabilityDropdown from '../AvailabilityDropdown/AvailabilityDropdown';
import SortFilter from '../SortFilter/SortFilter';

const SubPageFilter = ({
  totalBooks,
  availableDropdownHandler,
  sortOptionHandler,
}) => {
  return (
    <div className={styles.filter__div}>
      <AvailabilityDropdown
        availableDropdownHandler={availableDropdownHandler}
      />
      <div className={styles.left__filter}>
        <SortFilter sortOptionHandler={sortOptionHandler} />
        <p>{totalBooks.toString()} Books</p>
      </div>
    </div>
  );
};

export default SubPageFilter;
