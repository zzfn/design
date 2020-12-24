import React from 'react';
const Button: React.FC = ({children}) => {
    return (
        <button className={'tls-btn'}>{children}</button>
    );
}

export default Button;
