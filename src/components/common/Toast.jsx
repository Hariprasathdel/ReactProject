import React, { useEffect, useState } from 'react';
import { Toast as BootstrapToast } from 'react-bootstrap';

const Toast = ({ message, show, onClose, bg = 'bg-primary' }) => {
  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <BootstrapToast 
        show={show} 
        onClose={onClose} 
        delay={2800} 
        autohide
        className={`align-items-center text-white border-0 ${bg}`}
      >
        <div className="d-flex">
          <div className="toast-body">{message}</div>
          <button type="button" className="btn-close btn-close-white me-2 m-auto" onClick={onClose}></button>
        </div>
      </BootstrapToast>
    </div>
  );
};

export default Toast;