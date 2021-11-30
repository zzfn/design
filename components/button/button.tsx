import React from 'react';
import classNames from "classnames";

interface ButtonProps {
    className?: string;
    onClick?: (event:React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({children,className, onClick}) => {
    return (
        <button onClick={onClick} className={classNames('zzf-btn',className)}>{children}</button>
    );
}

export default Button;
