import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CartHeading from '../../components/Functional/Cart/CartHeading/CartHeading';
import Cart from '../../components/Functional/Cart/CartCard/Cart';
import CartSubTotal from '../../components/Functional/Cart/CartSubTotal/CartSubTotal';
import { cartActions } from '../../context/context-slices/cart-slice';

const CartPage = () => {
  const dispatch = useDispatch();
  const { items: cartItems, subTotal } = useSelector((state) => state.cart);

  const onCheckout = () => {
    console.log(cartItems);
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
      <CartHeading />
      {cartListContent}
      <CartSubTotal subTotal={subTotal} onCheckOutHandler={onCheckout} />
    </main>
  );
};

export default CartPage;
