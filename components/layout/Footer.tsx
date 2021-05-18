import React from 'react';
import classNames from "classnames";

const Footer: React.FC<classNameProps> = ({children, className}) => {
    return (
        <footer className={classNames('zzf-layout-footer', className)}>
            <section className={'zzf-box-responsive-main'}>
                {children}
            </section>
        </footer>
    );
}

export default Footer;
