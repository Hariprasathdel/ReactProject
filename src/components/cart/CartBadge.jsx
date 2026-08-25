import React from 'react';

const CartBadge = ({ count }) => {
  if (count === 0) return null;
  
  return (
    <span className="cart-badge">
      {count}
    </span>
  );
};

export default CartBadge;