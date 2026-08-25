import React from 'react';

const ProductCard = ({ product, onAddToCart, onBuyNow, isOffer = false, offerPrice = null }) => {
  const discount = offerPrice ? Math.round((1 - offerPrice / product.price) * 100) : 0;
  
  return (
    <div className="card position-relative">
      {isOffer && <span className="offer-badge">{discount}% OFF</span>}
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.desc}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span>
            <span className="price-tag">₹{(offerPrice || product.price).toLocaleString()}</span>
            {offerPrice && <del className="text-secondary small ms-2">₹{product.price.toLocaleString()}</del>}
          </span>
          <div>
            <button 
              className="btn-add me-1" 
              onClick={() => onAddToCart({ ...product, price: offerPrice || product.price })}
            >
              <i className="bi bi-cart-plus"></i>Add
            </button>
            <button 
              className="btn-buy" 
              onClick={() => onBuyNow({ ...product, price: offerPrice || product.price })}
            >
              <i className="bi bi-bag-check"></i>Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;