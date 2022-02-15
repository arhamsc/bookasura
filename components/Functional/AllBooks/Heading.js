import React from 'react';

import SubPageTitle from '../../ChildComponents/SubPageTitle/SubPageTitle';
import SubPageFilter from '../../ChildComponents/SubPageFilter/SubPageFilter';

const Heading = () => {
  return (
    <section style={{
      fontWeight: "300"
    }}>
      <SubPageTitle
        title={'All Books'}
        // eslint-disable-next-line react/jsx-key
        subtitle={['Take a look at our ', <i>Bookasura</i>, ' collection. ']}
      />
      <SubPageFilter />
    </section>
  );
};

export default Heading;
