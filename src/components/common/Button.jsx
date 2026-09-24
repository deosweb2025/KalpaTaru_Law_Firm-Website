import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  to, 
  href, 
  onClick, 
  variant = 'primary', 
  className = '', 
  type = 'button' 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-roboto font-medium tracking-wider text-sm transition-all duration-300 uppercase select-none text-center cursor-pointer';
  
  const variants = {
    primary: 'bg-[#D28C0E] hover:bg-[#b87705] text-white px-10 py-4 font-semibold shadow-sm',
    secondary: 'bg-transparent border-2 border-[#D28C0E] text-[#D28C0E] hover:bg-[#D28C0E] hover:text-white px-8 py-3 font-semibold',
    dark: 'bg-[#202125] hover:bg-[#141318] text-white px-10 py-4 font-semibold border border-white/10',
    compact: 'bg-[#D28C0E] hover:bg-[#b87705] text-white px-6 py-2.5 text-xs font-semibold'
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;

