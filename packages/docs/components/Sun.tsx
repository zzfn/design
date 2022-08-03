import { CSSProperties } from "react";

export interface CustomIconComponentProps {
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
}

const Close = (props: CustomIconComponentProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 48 48"
    >
      <path
        data-follow-stroke="#333"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M24 37c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13Z"
      />
      <path
        data-follow-fill="#333"
        d="M24 6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm14.5 6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm6 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-6 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM24 47a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM9.5 41a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-6-14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm6-14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      />
    </svg>
  );
};
export default Close;
