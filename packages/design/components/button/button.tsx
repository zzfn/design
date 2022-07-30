import React from 'react';
import classNames from '../utils/classNames';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: 'default' | 'primary';
  size?: 'default' | 'primary';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'secondary',
  size = 'default',
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames('zzf-btn', `zzf-btn-type-${type}`, `zzf-btn-size-${size}`, className)}
    >
      {children}
    </button>
  );
};

export default Button;
