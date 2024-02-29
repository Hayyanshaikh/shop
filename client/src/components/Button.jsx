import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, type = 'button', link, className, onClick }) => {
  const handleClick = () => {
    onClick && onClick();
  };

  const ButtonComponent = link ? Link : 'button';

  return (
    <ButtonComponent to={link} type={type} className={`text-black block text-center bg-orange-500 font-semibold py-2 px-6 transition rounded ${className}`} onClick={handleClick}>
      {text}
    </ButtonComponent>
  );
};

export default Button;
