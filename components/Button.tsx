import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void; 
  className?: string; 
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button 
      onClick={onClick} 
      className={`base-button ${className}`}
    >
      {text}
    </button>
  );
};
