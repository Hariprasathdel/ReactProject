import React from 'react';
import { Offcanvas, Button, ListGroup } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';
import OrderModal from '../orders/OrderModal';

const CartDropdown = ({ show, onClose }) => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal,
    clearCart 
  } = useCart();
  const [showOrderModal, setShowOrderModal] = React.useState(false);

  return (
    <>
      <Offcanvas show={show} onHide={onClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.length === 0 ? (
            <p className="text-center text-muted">Your cart is empty</p>
          ) : (
            <>
              <ListGroup variant="flush">
                {cartItems.map(item => (
                  <ListGroup.Item key={item.id} className="cart-item">
                    <div className="d-flex align-items-center">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }}
                      />
                      <div className="ms-3 flex-grow-1">
                        <div className="fw-bold">{item.name}</div>
                        <div className="text-muted small">${item.price.toFixed(2)}</div>
                        <div className="d-flex align-items-center mt-1">
                          <Button 
                            variant="outline-secondary" 
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </Button>
                          <span className="mx-2">{item.quantity}</span>
                          <Button 
                            variant="outline-secondary" 
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                          <Button 
                            variant="danger" 
                            size="sm"
                            className="ms-2"
                            onClick={() => removeFromCart(item.id)}
                          >
                            ×
                          </Button>
                        </div>
                      </div>
                      <div className="fw-bold">${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <div className="cart-total mt-3">
                <div className="d-flex justify-content-between">
                  <span>Total:</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="d-grid gap-2 mt-3">
                  <Button 
                    variant="primary" 
                    onClick={() => {
                      setShowOrderModal(true);
                      onClose();
                    }}
                  >
                    Checkout
                  </Button>
                  <Button 
                    variant="outline-danger" 
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
      <OrderModal 
        show={showOrderModal} 
        onClose={() => setShowOrderModal(false)} 
      />
    </>
  );
};

export default CartDropdown;