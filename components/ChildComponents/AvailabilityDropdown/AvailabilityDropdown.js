import React, { useRef, useState } from 'react';
import { ArrowDropDown } from '@material-ui/icons';

import styles from './AvailabilityDropdown.module.css';

const AvailabilityDropdown = () => {
  const [selectedFilter, setSelectedFilter] = useState(0);
  const inStockRef = useRef();
  const outOfStockRef = useRef();

  const checkHandler = () => {
    const inStockChecked = inStockRef.current.checked;
    const outOfStockedChecked = outOfStockRef.current.checked;

    if (!inStockChecked && !outOfStockedChecked) {
      setSelectedFilter(0);
    }

    if (inStockChecked || outOfStockedChecked) {
      setSelectedFilter(1);
    }

    if (inStockChecked && outOfStockedChecked) {
      setSelectedFilter(2);
    }
  };

  const resetHandler = () => {
    inStockRef.current.checked = false;
    outOfStockRef.current.checked = false;
    setSelectedFilter(0);
  };

  return (
    <div className={styles.left__filter}>
      <p>Filter: </p>
      <details className={styles.detail}>
        <summary>
          Availability
          <ArrowDropDown />
        </summary>
        {/* Drop Down */}
        <div className={styles.dropdown}>
          {/* Heading of drop down filter */}
          <div className={styles.dropdown__heading}>
            <p>{selectedFilter} selected</p>
            <button onClick={resetHandler}>Reset</button>
          </div>
          <div className={styles.dropdown__contents}>
            <div>
              <input
                type="checkbox"
                name="in_stock"
                id="in_stock"
                onChange={checkHandler}
                ref={inStockRef}
              />
              <label htmlFor="in_stock">In Stock</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="out_of_stock"
                id="out_of_stock"
                onChange={checkHandler}
                ref={outOfStockRef}
              />
              <label htmlFor="out_of_stock">Out of Stock</label>
            </div>
          </div>
        </div>
      </details>
    </div>
  );
};

export default AvailabilityDropdown;
