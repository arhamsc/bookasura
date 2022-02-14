/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from './ProductCard.module.css';

const ProductCard = ({itemName, imageUrl, price}) => {
  return (
    <section className={styles.product__card}>
      <div className={styles.product__image}>
        <img
          src={
            imageUrl
          }
          alt={itemName}
        />
      </div>
      <div className={styles.product__details}>
        <p>{itemName}</p>
        <p> &#x20B9;{price} INR</p>
      </div>
    </section>
  );
};

export default ProductCard;
