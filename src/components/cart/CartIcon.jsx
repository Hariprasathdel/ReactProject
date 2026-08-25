import React from 'react';
import { useCart } from '../../context/CartContext';

const CartIcon = ({ onClick }) => {
  const { cartCount } = useCart();
  
  return (
    <div className="position-relative me-2" style={{ cursor: 'pointer' }} onClick={onClick}>
      <i className="bi bi-cart fs-4"></i>
      <span className="cart-badge">{cartCount}</span>
    </div>
  );
};

export default CartIcon;