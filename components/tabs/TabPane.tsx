import React from 'react'
import classNames from 'classnames'

interface TabPaneProps {
  activeKey: string;
  value: string;
  label: string;
  onChange: (value: string) => void;
  children?: React.ReactNode;
}

const TabPane: React.FC<TabPaneProps> = ({ activeKey, value, label, onChange }) => {
  return (
    <li
      className={classNames('zzf-tab-btn', {
        active: activeKey === value,
        inactive: activeKey !== value
      })}
      onClick={() => onChange(value)}
    >
      {label}
    </li>
  )
}

export default TabPane
