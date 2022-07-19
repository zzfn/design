import React, { useEffect, useState } from 'react';

type BackTopType = {
  children: React.ReactNode;
};
const BackTop: React.FC<BackTopType> = ({ children }) => {
  const [isShow, setIsShow] = useState(false);

  function handleIsShow() {
    if (document.documentElement.scrollTop > 60) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleIsShow);
    return () => {
      window.removeEventListener('scroll', handleIsShow);
    };
  }, []);
  return (
    <>
      {isShow && (
        <div
          onClick={() => {
            scrollTo({ top: 0 });
          }}
          className={'zzf-back-top'}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default BackTop;
