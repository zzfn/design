import React from 'react';
import classNames from '../_util/classNames';

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  return (
    <header className={'zzf-layout-header'}>
      <section className={classNames('zzf-layout-header-content', className)}>{children}</section>
    </header>
  );
};

export default Header;
