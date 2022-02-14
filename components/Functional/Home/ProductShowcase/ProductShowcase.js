import React from 'react';
import ProductCard from '../../../UI/ProductCard/ProductCard';

import styles from './ProductShowcase.module.css';

const ProductShowcase = () => {
  return (
    <section className={styles.product__showcase__row}>
      <p>Have a look at our most popular books</p>
      <section className={styles.product__showcase__cards}>
        <ProductCard
          itemName={'Harry Potter'}
          imageUrl={
            'https://i.ibb.co/xD99JyP/madalyn-cox-Vk-GGIZul-OE0-unsplash.jpg'
          }
          price={'30'}
        />
        <ProductCard
          itemName={'Harry Potter'}
          imageUrl={
            'https://i.ibb.co/xD99JyP/madalyn-cox-Vk-GGIZul-OE0-unsplash.jpg'
          }
          price={'30'}
        />
        <ProductCard
          itemName={'Harry Potter'}
          imageUrl={
            'https://i.ibb.co/xD99JyP/madalyn-cox-Vk-GGIZul-OE0-unsplash.jpg'
          }
          price={'30'}
        />
        <ProductCard
          itemName={'Harry Potter'}
          imageUrl={
            'https://i.ibb.co/xD99JyP/madalyn-cox-Vk-GGIZul-OE0-unsplash.jpg'
          }
          price={'30'}
        />
      </section>
    </section>
  );
}

export default ProductShowcase