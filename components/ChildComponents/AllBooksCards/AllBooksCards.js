import React from 'react';
import { useSelector } from 'react-redux';
import styles from './AllBooksCards.module.css';

import ProductCard from '../../UI/ProductCard/ProductCard';

const AllBooksCards = ({books}) => {

  return <section className={styles.product__grid}>
    {
      books.map((book) => <ProductCard key={books._id} itemName={book.name} imageUrl={book.imageUrl} price={book.price} soldOut={book.inventory <= 0} /> )
    }
  </section>;
};

export default AllBooksCards;
