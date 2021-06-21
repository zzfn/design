import React from 'react';
import classNames from "classnames";

const Sidebar: React.FC<classNameProps> = ({children,className}) => {
    return (
        <aside className={classNames('hidden','md:block','zzf-layout-slider','zzf-box-responsive-slider',className)}>
            {children}
        </aside>
    );
}

export default Sidebar;
