import React from 'react';

const Alert = ({ type, message, className }) => {
  // Define Tailwind CSS classes based on the alert type
  const baseClasses = 'p-4 rounded fixed top-[120px] left-1/2 -translate-x-1/2 z-[9] text-white';
  const typeClasses = getTypeClasses(type);
  const customClasses = className || '';

  const alertClasses = `${baseClasses} ${typeClasses} ${customClasses}`;

  return (
    <div className={alertClasses}>
      <span className="font-semibold capitalize ">{type}: </span>
      {message}
    </div>
  );
};

const getTypeClasses = (type) => {
  switch (type) {
    case 'success':
      return 'bg-green-500 border-green-300';
    case 'error':
      return 'bg-red-500 border-red-300';
    case 'warning':
      return 'bg-yellow-500 border-yellow-300';
    case 'info':
      return 'bg-blue-500 border-blue-300';
    default:
      return '';
  }
};

export default Alert;
