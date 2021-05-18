import React from 'react';
type layoutHeaderProps ={
    className?:string
}
const Header:React.FC<layoutHeaderProps>=({children,className})=> {
    return (
        <header className={`zzf-layout-header ${className}`}>{children}</header>
    );
}

export default Header;
