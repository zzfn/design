import React from 'react';
import classNames from "classnames";

const Footer: React.FC<classNameProps> = ({children, className}) => {
    return (
        <footer className={'zzf-layout-footer'}>
            <section className={classNames('zzf-box-responsive-main', className)}>
                {children}
            </section>
        </footer>
    );
}

export default Footer;
