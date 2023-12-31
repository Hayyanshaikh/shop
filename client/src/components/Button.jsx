import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, link, className, onClick }) => {
  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return link ? (
    <Link to={link} className={`text-black block text-center bg-orange-500 font-semibold py-2 px-6 transition rounded ${className}`} onClick={handleButtonClick}>
      {text}
    </Link>
  ) : (
    <button className={`text-black block text-center bg-orange-500 font-semibold py-2 px-6 transition rounded ${className}`} onClick={handleButtonClick}>
      {text}
    </button>
  );
};

export default Button;
