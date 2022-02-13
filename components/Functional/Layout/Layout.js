import React, { Fragment } from 'react';

import MainHeader from '../MainHeader/MainHeader';

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      {props.children}
    </Fragment>
  );
};

export default Layout;
