import React from 'react';
import classNames from '../utils/classNames';

type TagType = {
  children: React.ReactNode;
  size?: 'small' | 'default' | 'medium'|'large';
  color?: string;
};
const Tag: React.FC<TagType> = ({ children, size = 'default' }) => {
  return <span className={classNames('zzf-tag', `zzf-tag-size-${size}`)}>{children}</span>;
};

export default Tag;
