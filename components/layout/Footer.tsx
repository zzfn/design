import React from 'react';
import classNames from 'classnames';
interface FooterProps {
  className?: string;
  children: React.ReactNode;
}
const Footer: React.FC<FooterProps> = ({ children, className }) => {
  return (
    <footer className={'zzf-layout-footer'}>
      <section className={classNames('zzf-layout-footer-content', className)}>{children}</section>
    </footer>
  );
};

export default Footer;
