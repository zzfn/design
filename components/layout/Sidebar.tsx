import React from 'react'
import classNames from 'classnames'
interface SidebarProps {
    className?: string;
}
const Sidebar: React.FC<SidebarProps> = ({ children, className }) => {
  return (
        <aside className={classNames('zzf-layout-slider', 'zzf-box-responsive-slider', className)}>
            {children}
        </aside>
  )
}

export default Sidebar
