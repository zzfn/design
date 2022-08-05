import React from 'react';
import classNames from '../_util/classNames';

interface InputType {
  className?: string;
  type?: string;
  autoFocus?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputType> = (props) => {
  const { type = 'text', className, autoFocus = false, placeholder, value, onChange } = props;

  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoFocus={autoFocus}
      type={type}
      className={classNames('zzf-ipt', className)}
    />
  );
};

export default Input;
