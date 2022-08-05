import React from 'react';
import classNames from '../_util/classNames';
interface ContentProps {
  className?: string;
  children: React.ReactNode;
}
const Content: React.FC<ContentProps> = ({ children, className }) => {
  return <section className={classNames('zzf-layout-content', className)}>{children}</section>;
};

export default Content;
