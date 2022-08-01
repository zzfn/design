import React, { CSSProperties } from 'react';

export interface CustomIconComponentProps {
  style?: CSSProperties;
  className?: string;
  onClick: () => void;
}
const Close = (props: CustomIconComponentProps) => {
  return (
    <svg
      {...props}
      width='1em'
      height='1em'
      fill='currentColor'
      viewBox='0 0 48 48'
      xmlns='http://www.w3.org/2000/svg'
      stroke='currentColor'
      strokeWidth='4'
    >
      <path
        d='M9.85742 9.85791L23.9996 24M23.9996 24L38.1417 38.1422M23.9996 24L38.1417 9.85791M23.9996 24L9.85742 38.1422'
        strokeLinecap='butt'
      ></path>
    </svg>
  );
};
export default Close;
