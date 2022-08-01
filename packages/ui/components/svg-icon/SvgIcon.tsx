import React from 'react';
import classNames from '../utils/classNames';

interface SvgIconProps {
  name: string;
  onClick?: () => void;
  color?: string;
  className?: string;
  size?: number;
}

const SvgIcon: React.FC<SvgIconProps> = ({ name, color, size, onClick, className }) => {
  return (
    <svg
      onClick={onClick}
      className={classNames('zzf-icon', className)}
      style={{ color, fontSize: size && `${size}px` }}
    >
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  );
};

export default SvgIcon;
