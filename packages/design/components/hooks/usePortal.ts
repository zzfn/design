import React, { useRef, useEffect } from 'react';

function createRootElement(id: string):HTMLElement {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);
  return rootContainer;
}


function addRootElement(rootElem: HTMLElement):void {
  document.body.insertBefore(rootElem, document.body.lastElementChild!.nextElementSibling);
}


function usePortal(id: string): HTMLElement | null {
  let rootElemRef = useRef<HTMLElement|null>(null);

  useEffect(() => {
    const existingParent = document.querySelector(`#${id}`);
    // Parent is either a new root or the existing dom element
    const parentElem = existingParent || createRootElement(id);

    if (!existingParent) {
      addRootElement(parentElem as HTMLElement);
    }

    parentElem.appendChild(rootElemRef.current as Node);

    return () => {
      if(rootElemRef.current){
        rootElemRef.current.remove();
      }
      if (!parentElem.childElementCount) {
        parentElem.remove();
      }
    };
  }, [id]);

  function getRootElem() {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div');
    }
    return rootElemRef.current;
  }

  return getRootElem();
}

export default usePortal;
