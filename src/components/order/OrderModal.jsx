import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';

const OrderModal = ({ show, onClose }) => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'credit_card'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process order
    console.log('Order placed:', { ...formData, items: cartItems, total: getCartTotal() });
    clearCart();
    onClose();
    alert('Order placed successfully!');
  };

  return (
    <Modal show={show} onHide={onClose} size="lg" className="order-modal">
      <Modal.Header closeButton>
        <Modal.Title>Place Your Order</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col lg={7}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Payment Method</Form.Label>
                <Form.Select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                >
                  <option value="credit_card">Credit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="cash">Cash on Delivery</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Col>
          <Col lg={5}>
            <div className="order-summary">
              <h5>Order Summary</h5>
              {cartItems.map(item => (
                <div key={item.id} className="d-flex justify-content-between py-2 border-bottom">
                  <span>{item.name} × {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="order-total d-flex justify-content-between mt-3 pt-2 border-top">
                <span>Total:</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
            </div>
            <Button 
              variant="primary" 
              className="w-100 mt-3"
              onClick={handleSubmit}
            >
              Place Order
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default OrderModal;