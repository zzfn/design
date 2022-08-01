import React from 'react';
import classNames from '../utils/classNames';
interface SidebarProps {
  className?: string;
  children: React.ReactNode;
}
const Center: React.FC<SidebarProps> = ({ children, className }) => {
  return <main className={classNames('zzf-layout-center', className)}>{children}</main>;
};

export default Center;
