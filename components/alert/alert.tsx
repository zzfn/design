import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: string;
}

const Alert: React.FC<ButtonProps> = ({ children, className, type }) => {
  return (
    <div className={classNames('zzf-alert', type && `zzf-alert-${type}`, className)}>
      {children}
    </div>
  );
};

export default Alert;
