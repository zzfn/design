import React from 'react';
import classNames from '../utils/classNames';

interface AlertProps {
  children: React.ReactNode;
  className?: string;
  type?: 'info' | 'success' | 'warning' | 'error';
}

const Alert: React.FC<AlertProps> = ({ children, className, type = 'info' }) => {
  return (
    <div className={classNames('zzf-alert', type && `zzf-alert-${type}`, className)}>
      {children}
    </div>
  );
};

export default Alert;
