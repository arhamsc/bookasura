import React from 'react';

import styles from './SubPageFilter.module.css';

import AvailabilityDropdown from '../AvailabilityDropdown/AvailabilityDropdown';
import SortFilter from '../SortFilter/SortFilter';

const SubPageFilter = () => {
  return (
    <div className={styles.filter__div}>
      <AvailabilityDropdown />
      <div className={styles.left__filter}>
        <SortFilter />
        <p>9 Books</p>
      </div>
    </div>
  );
};

export default SubPageFilter;
