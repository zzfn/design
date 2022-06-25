import React from 'react'

type TagType = {
  children: React.ReactNode;
};
const Tag: React.FC<TagType> = ({ children }) => {
  return <span className={'zzf-tag'}>{children}</span>
}

export default Tag
