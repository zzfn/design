import React from 'react'
import classNames from 'classnames'
interface ContentProps {
  className?: string;
  children: React.ReactNode;
}
const Content: React.FC<ContentProps> = ({ children, className }) => {
  return (
    <main className={classNames('zzf-layout-content', 'zzf-box-responsive-content', className)}>
      {children}
    </main>
  )
}

export default Content
