import React from 'react';
interface layoutProps {
    className?:string
}
const Layout:React.FC<layoutProps>=({children,className})=> {
    return (
        <section className={`zzf-layout zzf-box-responsive ${className}`}>{children}</section>
    );
}

export default Layout;
