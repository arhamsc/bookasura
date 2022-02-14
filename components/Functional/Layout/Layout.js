import React, { Fragment, useState } from 'react';
import styles from './Layout.module.css';

import MainHeader from '../MainHeader/MainHeader';
import Footer from '../Footer/Footer';
import MainSearchBar from '../../UI/MainSearchBar/MainSearchBar';

const Layout = (props) => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const showSearchBarHandler = () => {
    setShowSearchBar(true);
  };

  const closeSearchHandler = () => {
    setShowSearchBar(false);
  };
  return (
    <Fragment>
      {!showSearchBar ? (
        <MainHeader showSearchHandler={showSearchBarHandler} />
      ) : (
        <MainSearchBar onCloseHandler={closeSearchHandler} />
      )}
      {showSearchBar && <div className={styles.backdrop} /> }
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
