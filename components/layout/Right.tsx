import React from 'react';
import classNames from 'classnames';
interface SidebarProps {
  className?: string;
  children: React.ReactNode;
}
const Right: React.FC<SidebarProps> = ({ children, className }) => {
  return <aside className={classNames('zzf-layout-slider', className)}>{children}</aside>;
};

export default Right;
