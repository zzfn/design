import React from 'react';
import type { ReactNode } from 'react';
import Portal from '../common/Portal';
import { Button } from '../button';
import useOutsideClick from '../_hooks/useOutsideClick';
import classNames from '../_util/classNames';
import Close from '../icon/Close';
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
            <Close className={'zzf-model-close'} onClick={onCancel} />
          </header>
          <div>{children}</div>
          <footer className={'zzf-modal-footer'}>
            <Button onClick={onCancel}>取消</Button>
            <Button onClick={onConfirm}>确定</Button>
          </footer>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
