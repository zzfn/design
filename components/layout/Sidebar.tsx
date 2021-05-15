import React from 'react';

const Sidebar: React.FC = ({children}) => {
    return (
        <aside>
            {children}
        </aside>
    );
}

export default Sidebar;
