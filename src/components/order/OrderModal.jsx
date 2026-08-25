import React from 'react';
import { Modal } from 'react-bootstrap';

const OrderModal = ({ show, onHide, items, total }) => {
  return (
    <Modal show={show} onHide={onHide} centered className="rounded-4 border-0 shadow-lg">
      <div className="modal-content rounded-4 border-0 shadow-lg">
        <div className="modal-header border-0 pb-0">
          <h5 className="modal-title fw-bold">
            <i className="bi bi-receipt me-2 text-primary"></i>Order Details
          </h5>
          <button type="button" className="btn-close" onClick={onHide}></button>
        </div>
        <div className="modal-body pt-2">
          <div>
            {items.map((item, index) => (
              <div key={index} className="order-detail-item d-flex justify-content-between align-items-center">
                <div>
                  <span className="fw-semibold">{item.name}</span>
                  <span className="text-secondary small ms-2">x1</span>
                </div>
                <span className="fw-bold">₹{item.price.toLocaleString()}</span>
              </div>
            ))}
          </div>
          <hr />
          <div className="d-flex justify-content-between fw-bold">
            <span>Total</span>
            <span>₹{total.toLocaleString()}</span>
          </div>
          <p className="text-secondary small mt-2">
            <i className="bi bi-check-circle-fill text-success"></i> Order placed successfully!
          </p>
        </div>
        <div className="modal-footer border-0 pt-0">
          <button className="btn btn-primary rounded-pill px-4" onClick={onHide}>Done</button>
        </div>
      </div>
    </Modal>
  );
};

export default OrderModal;