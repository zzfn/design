import React from 'react';

const Basic:React.FC=({children})=> {
    return (
        <section className={`zzf-layout zzf-box-responsive`}>{children}</section>
    );
}

export default Basic;
