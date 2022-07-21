import React, { ReactNode } from 'react';
import classNames from '../utils/classNames';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: ReactNode;
}

const Card: React.FC<CardProps> = ({ children, title, className }) => {
  return (
    <section className={classNames('zzf-card', className)}>
      {title && (
        <header className={classNames('zzf-card-header')}>
          <span className={'zzf-card-header-text'}>{title}</span>
        </header>
      )}
      {children}
    </section>
  );
};

export default Card;
