/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

import styles from './ProductCard.module.css';

const ProductCard = ({ itemName, imageUrl, price, soldOut, navUrl }) => {
  return (
    <section className={styles.product__card}>
      <div className={styles.product__image}>
        <img src={imageUrl} alt={itemName} />
        {soldOut && (
          <div className={styles.sold__out__indicator}>
            <p>Sold Out</p>
          </div>
        )}
      </div>
      <div className={styles.product__details}>
        <p>
          <Link href={navUrl ?? ''}>{itemName}</Link>
        </p>
        <p> &#x20B9;{price} INR</p>
      </div>
    </section>
  );
};

export default ProductCard;
