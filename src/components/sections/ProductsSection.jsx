import React from 'react';
import { Container } from 'react-bootstrap';
import ProductGrid from '../products/ProductGrid';
import { products } from '../../data/productsData';
import { useCart } from '../../context/CartContext';

const ProductsSection = ({ showToast }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    showToast(`${product.name} added to cart!`, 'success');
  };

  return (
    <section id="products" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Our Products</h2>
        <p className="text-center text-muted mb-5">
          Discover our curated collection of high-quality products
        </p>
        <ProductGrid products={products} onAddToCart={handleAddToCart} />
      </Container>
    </section>
  );
};

export default ProductsSection;
