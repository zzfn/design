import React from 'react';

interface ButtonProps {
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({children, onClick}) => {
    return (
        <button onClick={onClick} className={'zzf-btn'}>{children}</button>
    );
}

export default Button;
