import React from 'react';
import classNames from "classnames";

const Main: React.FC<classNameProps> = ({children,className}) => {
    return (
        <main className={classNames('zzf-layout-main','zzf-box-responsive-main',className)}>{children}</main>
    );
}

export default Main;
