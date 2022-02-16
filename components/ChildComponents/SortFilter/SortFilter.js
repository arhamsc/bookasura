import React, { useRef } from 'react';

import styles from './SortFilter.module.css';

const SortFilter = ({ sortOptionHandler }) => {
  const selectRef = useRef();
  const onSelectionChangeHandler = () => {
    sortOptionHandler(selectRef.current.value);
  }
  return (
    <div className={styles.right__filter}>
      <p>Sort:</p>
      <div>
        <select name="sort" id="sort" ref={selectRef} onChange={onSelectionChangeHandler}>
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
