import React from 'react';

import styles from './SortFilter.module.css';

const SortFilter = () => {
  return (
    <div className={styles.right__filter}>
      <p>Sort:</p>
      <div>
        <select name="sort" id="sort">
          <option value="default">Default</option>
          <option value="popular">Popular</option>
          <option value="ascending_alphabetically">Alphabetically(A-Z)</option>
          <option value="descending_alphabetically">Alphabetically(Z-A)</option>
          <option value="price_low_high">Price(Low to High)</option>
          <option value="price_high_low">Price(High to Low)</option>
        </select>
      </div>
    </div>
  );
};

export default SortFilter;
