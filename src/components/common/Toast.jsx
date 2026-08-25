import React, { useEffect, useState } from 'react';

const Toast = ({ message, type = 'success' }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const getColor = () => {
    switch(type) {
      case 'success': return '#27ae60';
      case 'error': return '#e74c3c';
      case 'warning': return '#f39c12';
      default: return '#3498db';
    }
  };

  return (
    <div className="toast-container">
      <div 
        className="toast-custom"
        style={{ borderLeftColor: getColor() }}
      >
        <div className="d-flex align-items-center">
          <span className="me-2">
            {type === 'success' ? '✅' : type === 'error' ? '❌' : '⚠️'}
          </span>
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
};

export default Toast;