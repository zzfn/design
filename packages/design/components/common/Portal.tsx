import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import usePortal from '../hooks/usePortal';

/**
 * @example
 * <Portal id="modal">
 *   <p>Thinking with portals</p>
 * </Portal>
 */
type PortalType = {
  id: string;
  children: ReactNode;
};
const Portal = ({ id, children }: PortalType) => {
  const target = usePortal(id);
  return target && createPortal(children, target);
};

export default Portal;
