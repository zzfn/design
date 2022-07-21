import React from 'react';
import type { ReactNode } from 'react';
import Portal from '../common/Portal';
import { Button } from '../button';
import useOutsideClick from '../hooks/useOutsideClick';
import classNames from '../utils/classNames';

type ModalType = {
  title?: string;
  children?: ReactNode;
  visible?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};
const Modal = (props: ModalType) => {
  const { title, children, visible, onConfirm = () => {}, onCancel = () => {} } = props;
  const ref = useOutsideClick<HTMLDivElement>(onCancel);

  return (
    <Portal id='modal'>
      <div className={classNames('zzf-modal-mask', visible && 'zzf-modal-show')}>
        <div ref={ref} className={'zzf-modal-container'}>
          <header className={'zzf-modal-header'}>
            <div>{title}</div>
            <svg
              onClick={onCancel}
              className={'zzf-model-close'}
              width='1em'
              height='1em'
              viewBox='0 0 48 48'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8 8L40 40'
                stroke='currentColor'
                strokeWidth='4'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M8 40L40 8'
                stroke='currentColor'
                strokeWidth='4'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </header>
          <div>{children}</div>
          <footer className={'zzf-modal-footer'}>
            <Button onClick={onCancel}>取消</Button>
            <Button onClick={onConfirm} theme={'solid'}>
              确定
            </Button>
          </footer>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
