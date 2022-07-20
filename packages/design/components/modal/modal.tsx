import React, { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Content from './content';

type ModalType = {
  title?: string;
  children?: ReactNode;
  toggled?: ReactNode;
  onConfirm?: () => void;
};
const Modal = (props: ModalType) => {
  const [content, setContent] = useState(new Date().toString());
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogContent, setDialogContent] = useState<Element | null>(null);
  useEffect(() => {
    const element = document.createElement('div');
    element.className = 'modal-root';
    document.body.appendChild(element);
    setDialogContent(element);
    return () => {
      document.body.removeChild(element);
    };
  }, []);

  return (
    <div>
      {dialogContent &&
        createPortal(
          <Content
            onConfirm={props.onConfirm}
            title={props.title}
            visible={dialogVisible}
            content={content}
            close={() => {
              setDialogVisible(false);
            }}
          >
            {props.children}
          </Content>,
          dialogContent,
        )}
      <div
        onClick={() => {
          setContent(new Date().toString());
          setDialogVisible(true);
        }}
      >
        {props.toggled}
      </div>
    </div>
  );
};

export default Modal;
