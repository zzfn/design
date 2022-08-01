import React from 'react';
import classNames from '../utils/classNames';
interface SidebarProps {
  className?: string;
  children: React.ReactNode;
}
const Left: React.FC<SidebarProps> = ({ children, className }) => {
  return <aside className={classNames('zzf-layout-slider', className)}>{children}</aside>;
};

export default Left;
