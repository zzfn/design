import React from 'react';

const Main: React.FC = ({children}) => {
    return (
        <main className={'zzf-layout-main zzf-box-responsive-main'}>{children}</main>
    );
}

export default Main;
