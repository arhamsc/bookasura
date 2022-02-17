import { DeleteOutline } from '@material-ui/icons';
import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../../context/context-slices/cart-slice';

import styles from './Cart.module.css';

const Cart = ({ cartItem }) => {
  const dispatch = useDispatch();

  const onIncrementHandler = () => {
    dispatch(cartActions.addItemToCart(cartItem));
  };

  const onDeleteHandler = () => {
    dispatch(cartActions.deleteCartItem(cartItem._id));
  };

  const onDecrementHandler = () => {
    dispatch(cartActions.removeCartItem(cartItem._id));
  };
  return (
    <section className={styles.cart__card}>
      {/* Image + Name + Price */}
      <div className={styles.name__image__div}>
        {/* Image */}
        <div className={styles.image__div}>
          <Image
            className={styles.image}
            src={cartItem.imageUrl}
            alt={'Image'}
            width={'100%'}
            height={'100%'}
          />
        </div>
        {/* Details */}
        <div className={styles.cart__details}>
          <p>{cartItem.name}</p>
          <p>&#x20B9; {cartItem.price}</p>
        </div>
      </div>
      {/* Change Cart Item */}
      <div className={styles.change__cart}>
        <div className={styles.stepper}>
          <button onClick={onDecrementHandler}>-</button>
          <span>{cartItem.quantity}</span>
          <button onClick={onIncrementHandler}>+</button>
        </div>
        <button onClick={onDeleteHandler} className={styles.deleteButton}>
          <DeleteOutline />
        </button>
      </div>
      {/* Total */}
      <div className={styles.total__amount}>
        <p>Total: &#x20B9; {cartItem.totalPrice}</p>
      </div>
    </section>
  );
};

export default Cart;
