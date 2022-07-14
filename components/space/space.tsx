import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: string;
}

const Space: React.FC<ButtonProps> = ({ children, className, type }) => {
  return (
    <div className={classNames('zzf-space')}>
      {children}
    </div>
  );
};

export default Space;
