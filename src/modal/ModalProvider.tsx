import React, { PropsWithChildren, useCallback, useRef, useState } from 'react';
import { ModalContext } from './ModalContext';

type ModalProviderProps = PropsWithChildren<{
  bodyClass?: string;
}>;

function refreshBodyClass(list: Array<string>, bodyClass = 'ModalOpen') {
  list.length > 0 ? document.body.classList.add(bodyClass) : document.body.classList.remove(bodyClass);
}
export function ModalProvider(props: ModalProviderProps) {
  const { children, bodyClass } = props;
  const portalRef = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);

  const openedMap = useRef<Record<number, boolean>>({});

  const onRef = useCallback(
    (elem: HTMLDivElement) => {
      portalRef.current = elem;
      setReady(true);
    },
    [portalRef, setReady]
  );

  const onModalOpen = useCallback(
    (modal) => {
      openedMap.current[modal] = true;
      refreshBodyClass(Object.keys(openedMap.current), bodyClass);
    },
    [bodyClass]
  );

  const onModalClose = useCallback(
    (modal) => {
      delete openedMap.current[modal];
      refreshBodyClass(Object.keys(openedMap.current), bodyClass);
    },
    [bodyClass]
  );

  return (
    <ModalContext.Provider
      value={{
        onModalClose,
        onModalOpen,
        portalElem: portalRef.current,
      }}
    >
      <div ref={onRef}></div>
      {ready && children}
    </ModalContext.Provider>
  );
}
