import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CartHeading from '../../components/Functional/Cart/CartHeading/CartHeading';
import Cart from '../../components/Functional/Cart/CartCard/Cart';
import CartSubTotal from '../../components/Functional/Cart/CartSubTotal/CartSubTotal';
import { cartActions } from '../../context/context-slices/cart-slice';
import axios from 'axios';
import { requestUrl } from '../../db/domain_url';
import { useRouter } from 'next/router';

import { isAuth } from '../../helpers/from-end/is_auth.js';
import Head from 'next/head';

const CartPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  let isAuthenticated = isAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/auth');
    }
  }, [isAuthenticated, router]);

  const {
    items: cartItems,
    subTotal,
    totalQuantity,
  } = useSelector((state) => state.cart);

  const onCheckout = async () => {
    console.log(cartItems);

    const { data } = await axios.post(
      requestUrl('api/stripe-checkout'),
      {
        cartItems,
        subTotal,
        totalQuantity,
      },
      {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
      },
    );
    router.push(data.url);
    dispatch(cartActions.deleteFullCart());
  };

  const cartListContent =
    cartItems.length > 0 ? (
      cartItems.map((item) => <Cart key={item._id} cartItem={item} />)
    ) : (
      <p
        style={{
          textAlign: 'center',
        }}
      >
        No Cart Items
      </p>
    );
  return (
    <main>
      <Head>
        <title>Your Cart</title>
        <meta name="description" content="Bookasura Cart" />
      </Head>
      <CartHeading />
      {cartListContent}
      <CartSubTotal subTotal={subTotal} onCheckOutHandler={onCheckout} />
    </main>
  );
};

export default CartPage;
