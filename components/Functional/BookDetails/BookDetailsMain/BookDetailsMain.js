import Image from 'next/image';
import React, { useState } from 'react';

import styles from './BookDetailsMain.module.css';
const BookDetailsMain = ({ book, onAddToCartHandler, canAddToCart }) => {
  const soldOut = book.inventory <= 0;
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState('');
  const buttonClickHandler = () => {
    setShowModal(true);
    if (!canAddToCart) {
      setModalText('You Have to Login!!!!');
    } else {
      setModalText('Added to Cart');
      onAddToCartHandler({
        _id: book._id,
        name: book.name,
        price: book.price,
        imageUrl: book.imageUrl,
      });
    }
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };
  return (
    <section className={styles.book__details__main}>
      {/* Image */}
      <div className={styles.image__div}>
        <Image
          className={styles.image}
          src={book.imageUrl}
          alt={book.name}
          layout={'fill'}
        />
      </div>
      {/* Details */}
      <div className={styles.details__div}>
        {/* Name, Price and Sold out status */}
        <div className={styles.name__price}>
          <p>{book.name}</p>
          <div>
            <p>&#x20B9; {book.price}</p>
            <p>{soldOut ? 'Sold Out' : 'In Stock'}</p>
          </div>
        </div>
        {/* Add to Cart Button */}
        <div className={styles.add__to__cart__button}>
          <button disabled={soldOut} onClick={buttonClickHandler}>
            {soldOut ? 'Sold Out' : 'Add to Cart'}
          </button>
        </div>
        {/* Description */}
        <div className={styles.description}>
          <p>{book.description}</p>
        </div>
      </div>
      {/* Added to cart confirmation model */}
      {showModal && (
        <div className={styles.modal}>
          <button onClick={closeModalHandler}>X</button>
          <p>{modalText}</p>
        </div>
      )}
    </section>
  );
};

export default BookDetailsMain;
