import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onAddToCart, onBuyNow }) => {
  return (
    <section id="products" className="mb-5">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="section-title">Products</h2>
        <span className="badge bg-primary rounded-pill px-3 py-2">Trending</span>
      </div>
      <div className="row g-4">
        {products.map(product => (
          <div key={product.id} className="col-sm-6 col-md-4 col-lg-4">
            <ProductCard 
              product={product} 
              onAddToCart={onAddToCart} 
              onBuyNow={onBuyNow} 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;