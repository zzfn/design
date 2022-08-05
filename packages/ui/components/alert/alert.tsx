import React from 'react';
import classNames from '../_util/classNames';

interface AlertProps {
  children: React.ReactNode;
  className?: string;
  type?: 'info' | 'success' | 'warning' | 'error';
}

const Alert = ({ children, className, type = 'info' }:AlertProps) => {
  return (
    <div className={classNames('zzf-alert', type && `zzf-alert-${type}`, className)}>
      {children}
    </div>
  );
};

export default Alert;
