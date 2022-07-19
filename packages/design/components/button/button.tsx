import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  theme?: 'light' | 'solid';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, theme = 'light', className, onClick }) => {
  return (
    <button onClick={onClick} className={classNames('zzf-btn', `zzf-btn-${theme}`, className)}>
      {children}
    </button>
  );
};

export default Button;
