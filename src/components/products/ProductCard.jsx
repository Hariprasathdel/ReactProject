import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Card className="product-card">
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body className="d-flex flex-column">
        <Badge bg="secondary" className="mb-2 align-self-start">
          {product.category}
        </Badge>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="flex-grow-1">
          {product.description.length > 60 
            ? product.description.substring(0, 60) + '...' 
            : product.description}
        </Card.Text>
        <div className="mt-auto">
          <div className="d-flex align-items-center mb-2">
            <span className="price">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="old-price">${product.oldPrice.toFixed(2)}</span>
            )}
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-warning">
              {'⭐'.repeat(Math.floor(product.rating))}
              <span className="text-muted ms-1">{product.rating}</span>
            </span>
            <Button 
              className="btn-add-cart"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;