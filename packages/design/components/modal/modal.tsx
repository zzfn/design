import React, { ReactNode, useEffect, useState } from 'react';
import Portal from '../common/Portal';
import { Button } from '../button';
import useOutsideClick from '../hooks/useOutsideClick';
import classNames from 'classnames';

type ModalType = {
  title?: string;
  children?: ReactNode;
  visible?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
};
const Modal = (props: ModalType) => {
  const { title, children, visible, onConfirm, onCancel } = props;
  const [show, setShow] = useState(visible);
  const ref = useOutsideClick<HTMLDivElement>(() => {});

  return (
    visible&&<Portal id='modal'>
      <div className={classNames('zzf-modal-mask', show && 'zzf-modal-show')}>
        <div ref={ref} className={'zzf-modal-container'}>
          <header className={'zzf-modal-header'}>
            <div>{title}</div>
            <svg
              onClick={() => setShow(false)}
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
            <Button>取消</Button>
            <Button theme={'solid'}>确定</Button>
          </footer>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
