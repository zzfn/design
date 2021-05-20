import React, {ReactNode} from 'react';
import classNames from "classnames";

interface cl {
    className?: string
}

interface CardProps extends cl {
    title?: ReactNode
}

const Card: React.FC<CardProps> = ({children, title, className}) => {
    return (
        <section className={classNames('zzf-card', className)}>
            <header>{title}</header>
            {children}
        </section>
    );
}

export default Card;
