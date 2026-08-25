import React from 'react';
import { Card, Button } from 'react-bootstrap';

const OfferCard = ({ offer }) => {
  return (
    <Card 
      className="offer-card"
      style={{ background: offer.color }}
    >
      <Card.Body>
        <div className="offer-badge">{offer.discount}</div>
        <Card.Title className="mt-3">{offer.title}</Card.Title>
        <Card.Text>{offer.description}</Card.Text>
        <Button variant="light" className="mt-2">
          Shop Now →
        </Button>
      </Card.Body>
    </Card>
  );
};

export default OfferCard;