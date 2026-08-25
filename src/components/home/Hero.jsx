import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-start">
            <h1 className="display-4 fw-bold mb-3">
              Smart Shopping Starts Here
            </h1>
            <p className="lead mb-4">
              Discover amazing deals on premium products. 
              Quality meets affordability at SmartCart.
            </p>
            <div>
              <Button variant="light" size="lg" className="me-3">
                Shop Now
              </Button>
              <Button variant="outline-light" size="lg">
                Learn More
              </Button>
            </div>
          </Col>
          <Col lg={6} className="text-center d-none d-lg-block">
            <div className="p-4">
              <div style={{ fontSize: '6rem' }}>
                🛒
              </div>
              <p className="mt-3 opacity-75">
                Join thousands of happy shoppers
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;