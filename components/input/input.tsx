import React from 'react';
import classNames from "classnames";

const Input: React.FC<classNameProps> = ({children, className}) => {
    return (
        <input className={classNames('zzf-ipt', className)}/>
    );
}

export default Input;
