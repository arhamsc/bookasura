/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';

import styles from './ProductCard.module.css';

const ProductCard = () => {
  return (
    <section className={styles.product__card}>
      <div className={styles.product__image}>
        <img
          src={
            'https://i.ibb.co/xD99JyP/madalyn-cox-Vk-GGIZul-OE0-unsplash.jpg'
          }
          alt={'BookImage'}
        />
      </div>
      <div className={styles.product__details}>
        <p>Harry Potter</p>
        <p>$20</p>
      </div>
    </section>
  );
};

export default ProductCard;
