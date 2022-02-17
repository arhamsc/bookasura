import React from 'react';
import ProductCard from '../../../UI/ProductCard/ProductCard';

import styles from './ProductShowcase.module.css';

const ProductShowcase = ({popularBooks}) => {

  return (
    <section className={styles.product__showcase__row}>
      <p>Have a look at our most popular books</p>
      <section className={styles.product__showcase__cards}>
        {popularBooks.map((book) => (
          <ProductCard
            key={book._id}
            itemName={book.name}
            imageUrl={book.imageUrl}
            price={book.price}
            soldOut={book.inventory === 0}
            navUrl={`/books/${book._id}`}
          />
        ))}
      </section>
    </section>
  );
};

export default ProductShowcase;
