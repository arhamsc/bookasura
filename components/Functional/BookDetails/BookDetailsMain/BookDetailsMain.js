import { DeleteOutline } from '@material-ui/icons';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import styles from './BookDetailsMain.module.css';
const BookDetailsMain = ({
  book,
  onAddToCartHandler,
  canAddToCart,
  onDeleteHandler,
}) => {
  const soldOut = book.inventory <= 0;
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState('');
  const [deleteModal, setDeleteModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const user = useSelector((state) => state.user);
  const router = useRouter();

  const isAdmin = user.role === 'admin';

  const buttonClickHandler = () => {
    setShowModal(true);
    if (!canAddToCart) {
      setModalText('You Have to Login!!!!');
      return;
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

  const editButtonHandler = () => {
    router.push(`/books/edit/${book._id}`);
  };

  const showDeleteModal = () => {
    setDeleteModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const deleteButtonHandler = async () => {
    setIsLoading(true);
    await onDeleteHandler(book._id);
    router.replace('/');
    setIsLoading(false);
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
        {canAddToCart && isAdmin && (
          <>
            <div className={styles.add__to__cart__button}>
              <button onClick={editButtonHandler}>{'Edit'}</button>
            </div>
            <div className={styles.add__to__cart__button}>
              <button
                style={{
                  color: 'red',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={showDeleteModal}
              >
                {'Delete'}
                <DeleteOutline />
              </button>
            </div>
          </>
        )}
        {/* Description */}
        <div className={styles.description}>
          <p>{book.description}</p>
        </div>
      </div>
      {/* Added to cart confirmation model */}
      {showModal && (
        <div className={styles.modal}>
          <button onClick={closeModalHandler}>X</button>
          <p
            className={canAddToCart ? styles.addToCart : styles.cannotAddToCart}
          >
            {modalText}
          </p>
        </div>
      )}
      {deleteModal && (
        <div className={styles.modal}>
          <button onClick={() => setDeleteModal(false)}>X</button>
          <p
            style={{
              color: 'red',
            }}
          >
            {'Deleting the Item'}
          </p>
          <button
            className={styles.delete__confirm}
            onClick={deleteButtonHandler}
          >
            {isLoading ? 'Loading ...' : 'Delete'}
          </button>
        </div>
      )}
    </section>
  );
};

export default BookDetailsMain;
