import Link from 'next/link';
import React from 'react'

import styles from './CartHeading.module.css';

const CartHeading = () => {
  return (
    <section className={styles.heading}>
      <p>Your Cart</p>
      <Link href={'/'} passHref={true}>
        <u>Continue Shopping</u>
      </Link>
    </section>
  );
}

export default CartHeading