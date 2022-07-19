import React from 'react';
import classNames from 'classnames';

export interface BasicProps {
  direction?: 'row' | 'column';
  className?: string;
  children: React.ReactNode;
}

const Basic: React.FC<BasicProps> = ({ children, direction = 'row', className }) => {
  return <section className={classNames(className, 'zzf-layout')}>{children}</section>;
};

export default Basic;
