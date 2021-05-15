import React from 'react';

const Content:React.FC=({children})=> {
    return (
        <main className={'zzf-layout-content box-responsive-main'}>
            {children}
        </main>
    );
}

export default Content;
