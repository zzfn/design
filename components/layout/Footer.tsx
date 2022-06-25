import React from 'react'
import classNames from 'classnames'
interface FooterProps {
  className?: string;
  children: React.ReactNode;
}
const Footer: React.FC<FooterProps> = ({ children, className }) => {
  return (
    <footer className={'zzf-layout-footer'}>
      <section className={classNames('zzf-box-responsive-main', className)}>{children}</section>
    </footer>
  )
}

export default Footer
