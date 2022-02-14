import React, { useState } from 'react';
import { Close, SearchTwoTone } from '@material-ui/icons';

import styles from './MainSearchBar.module.css';

const MainSearchBar = ({onCloseHandler}) => {
  const [searching, setSearching] = useState(false);

  const gainFocusClickHandler = () => {
    setSearching(true);
  }

  const looseFocusClickHandler = () => {
    setSearching(false);
  }
  return (
    <section className={styles.search__section}>
      <div className={styles.search__display}>
        <div
          className={`${styles.search__area} ${
            searching
              ? styles.search__area__border__dark
              : styles.search__area__border__light
          }`}
        >
          <form>
            <label
              htmlFor="search"
              className={
                (searching && styles.search__text__small) ||
                styles.search__text__large
              }
            >
              Search
            </label>
            <input
              type="text"
              id="search"
              onFocus={gainFocusClickHandler}
              onBlur={looseFocusClickHandler}
            />
          </form>
          <div>
            <SearchTwoTone />
          </div>
        </div>
        <div className={styles.close__icon}>
          <button onClick={onCloseHandler}>
            <Close />
          </button>
        </div>
      </div>
    </section>
  );
}

export default MainSearchBar