import React, {ReactNode} from 'react';
import classNames from "classnames";
import {SvgIcon} from "../svg-icon";

interface CardProps extends classNameProps {
    title?: ReactNode
    icon: string
}

const Card: React.FC<CardProps> = ({children,icon, title, className}) => {
    return (
        <section className={classNames('zzf-card', className)}>
            <header className={classNames('zzf-card-header')}>
                <SvgIcon size={20} name={icon}/>
                <span className="ml-3">{title}</span>
            </header>
            {children}
        </section>
    );
}

export default Card;
