import React from 'react';

import styles from './CartSubTotal.module.css';

const CartSubTotal = ({ onCheckOutHandler, subTotal}) => {
  const buttonDisabled = subTotal <= 0 || subTotal === undefined;
  return (
    <section className={styles.sub__total__div}>
      <p>
        Subtotal: <span>&#x20B9;{subTotal ?? 0} INR</span>
      </p>
      <p>Including taxes and excluding shipping</p>
        <button onClick={onCheckOutHandler} disabled={buttonDisabled}>
          Check Out
        </button>
    </section>
  );
};

export default CartSubTotal;
