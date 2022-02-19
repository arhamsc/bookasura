import React, { Fragment} from 'react';

import MainHeader from '../MainHeader/MainHeader';
import Footer from '../Footer/Footer';

const Layout = (props) => {
 
  return (
    <Fragment>    
        <MainHeader/> 
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
