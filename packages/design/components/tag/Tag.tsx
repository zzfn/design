import React from 'react';
import classNames from '../utils/classNames';

type TagType = {
  children: React.ReactNode;
  type: 'light' | 'ghost' | 'solid';
};
const Tag: React.FC<TagType> = ({ children, type = 'light' }) => {
  return <span className={classNames('zzf-tag', `zzf-tag-${type}`)}>{children}</span>;
};

export default Tag;
