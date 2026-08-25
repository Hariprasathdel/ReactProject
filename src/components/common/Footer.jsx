import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="fw-bold">SmartCart</h5>
            <p className="text-light opacity-75">
              Your one-stop shopping destination for quality products at competitive prices.
            </p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#products">Products</a></li>
              <li><a href="#offers">Offers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#" className="me-3">📱</a>
              <a href="#" className="me-3">🐦</a>
              <a href="#" className="me-3">📸</a>
              <a href="#">💼</a>
            </div>
            <p className="mt-3 text-light opacity-75">
              <small>© 2024 SmartCart. All rights reserved.</small>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;