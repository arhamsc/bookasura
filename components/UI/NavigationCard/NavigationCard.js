/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ArrowRightAlt } from '@material-ui/icons';

import styles from './NavigationCard.module.css';
import Link from 'next/link';

const NavigationCard = ({ categoryName, imageUrl, navUrl }) => {
  return (
    <Link href={navUrl ?? '/'} passHref={true}>
      <section className={styles.product__card}>
        <div className={styles.product__image}>
          <img src={imageUrl} alt={categoryName} />
        </div>
        <div className={styles.product__details}>
          <p>{categoryName}</p>
          <ArrowRightAlt className={styles.arrow} />
        </div>
      </section>
    </Link>
  );
};

export default NavigationCard;
