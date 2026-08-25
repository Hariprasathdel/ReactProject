import React, { useState, useRef, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import CartIcon from './CartIcon';

const CartDropdown = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Cart is empty');
      return;
    }
    // In a real app, this would trigger the order modal
    alert(`Order placed with ${cart.length} items! Total: ₹${getCartTotal().toLocaleString()}`);
    clearCart();
    setIsOpen(false);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>
        <CartIcon />
      </div>
      {isOpen && (
        <div className="dropdown-menu show p-3" style={{ minWidth: '240px', position: 'absolute', right: 0, top: '100%' }}>
          <h6 className="dropdown-header">Your Cart</h6>
          <div className="cart-preview">
            {cart.length === 0 ? (
              <p className="text-secondary small">Cart is empty</p>
            ) : (
              cart.map((item, index) => (
                <div key={index} className="cart-preview-item">
                  <span>{item.name}</span>
                  <span>₹{item.price.toLocaleString()}</span>
                </div>
              ))
            )}
          </div>
          <hr className="my-2" />
          <div className="d-flex justify-content-between fw-bold">
            <span>Total</span>
            <span>₹{getCartTotal().toLocaleString()}</span>
          </div>
          <button 
            className="btn btn-primary btn-sm w-100 mt-2 rounded-pill"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;