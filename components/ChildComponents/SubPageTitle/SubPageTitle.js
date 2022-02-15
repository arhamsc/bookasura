import React from 'react';
import { MenuBook } from '@material-ui/icons';

import styles from './SubPageTitle.module.css';

const SubPageTitle = ({title, subtitle}) => {
  return (
    <div className={styles.title__div}>
      <p className={styles.title}>{title}</p>
      <p className={styles.subtitle}>
        {subtitle}
        <MenuBook
          style={{
            fontSize: '1rem',
            display: 'inline',
          }}
        />
      </p>
    </div>
  );
};

export default SubPageTitle;
