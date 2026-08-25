import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Button } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';
import CartDropdown from '../cart/CartDropdown';
import CartBadge from '../cart/CartBadge';

const Navbar = () => {
  const { getCartCount, isCartOpen, toggleCart } = useCart();

  return (
    <>
      <BootstrapNavbar bg="white" expand="lg" className="shadow-sm sticky-top">
        <Container>
          <BootstrapNavbar.Brand href="/" className="fw-bold">
            Smart<span style={{ color: '#3498db' }}>Cart</span>
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#offers">Offers</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <div className="d-flex align-items-center">
              <Button 
                variant="outline-primary" 
                className="position-relative"
                onClick={toggleCart}
              >
                <i className="bi bi-cart"></i>
                <CartBadge count={getCartCount()} />
              </Button>
            </div>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
      <CartDropdown show={isCartOpen} onClose={toggleCart} />
    </>
  );
};

export default Navbar;