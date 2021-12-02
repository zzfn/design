import React from 'react'
import classNames from 'classnames'
interface HeaderProps {
    className?: string;
}
const Header: React.FC<HeaderProps> = ({ children, className }) => {
  return (
        <header className={'zzf-layout-header'}>
            <section className={classNames('zzf-box-responsive-main', 'zzf-layout-header-content', className)}>
                {children}
            </section>
        </header>
  )
}

export default Header
