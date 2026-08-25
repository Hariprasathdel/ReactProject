import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import OfferCard from '../products/OffersCard';
import { offers } from '../../data/productsData';

const OffersSection = () => {
  return (
    <section id="offers" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Special Offers</h2>
        <p className="text-center text-muted mb-5">
          Don't miss out on these amazing deals!
        </p>
        <Row>
          {offers.map(offer => (
            <Col key={offer.id} md={4} className="mb-4">
              <OfferCard offer={offer} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OffersSection;
