import React from 'react'
import classNames from 'classnames'
interface MainProps {
  className?: string;
}
const Main: React.FC<MainProps> = ({ children, className }) => {
  return (
        <main className={classNames('zzf-layout-main', 'zzf-box-responsive-main', className)}>{children}</main>
  )
}

export default Main
