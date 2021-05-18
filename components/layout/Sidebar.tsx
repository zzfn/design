import React from 'react';

const Sidebar: React.FC = ({children}) => {
    return (
        <aside className={'zzf-box-responsive-slider'}>
            {children}
        </aside>
    );
}

export default Sidebar;
