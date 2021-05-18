import React from 'react';

const Content:React.FC=({children})=> {
    return (
        <main className={'zzf-layout-content zzf-box-responsive-content'}>
            {children}
        </main>
    );
}

export default Content;
