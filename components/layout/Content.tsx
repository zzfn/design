import React from 'react';
import classNames from "classnames";

const Content: React.FC<classNameProps> = ({children, className}) => {
    return (
        <main className={classNames('zzf-layout-content', 'zzf-box-responsive-content',className)}>
            {children}
        </main>
    );
}

export default Content;
