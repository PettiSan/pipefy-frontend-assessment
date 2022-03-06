import React, { ReactNode, useCallback, useContext, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Modal } from './Modal';
import { ModalContext, ModalInnerContext } from './ModalContext';

let uid = 0;
function getNextId() {
  return ++uid;
}

type UseModalParams = {
  closeEnabled?: boolean;
  modal: ReactNode;
  open?: boolean;
  initialSelector?: string;
  onClose?(): void;
};
export function useModal<M>(data: UseModalParams) {
  const context = useContext(ModalContext);
  const uid = useRef(getNextId());
  const [isOpen, setIsOpen] = useState(!!data.open);
  const [meta, setMeta] = useState<M>();
  const onCloseRef = useRef<() => void>();

  useEffect(() => {
    if (isOpen) {
      context.onModalOpen(uid.current);
    } else {
      context.onModalClose(uid.current);
      data.onClose && data.onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    const id = uid.current;
    return () => {
      context.onModalClose(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.onModalClose]);

  const openModal = useCallback(
    (meta?: M, onCloseCallback?: () => void) => {
      onCloseRef.current = onCloseCallback;
      setMeta(meta);
      setIsOpen(true);
    },
    [setIsOpen]
  );

  const closeModal = useCallback(() => {
    setIsOpen(false);
    if (onCloseRef.current) {
      onCloseRef.current();
      onCloseRef.current = undefined;
    }
  }, [setIsOpen]);

  return {
    isOpen: isOpen,
    open: openModal,
    close: closeModal,
    elem: isOpen ? (
      <WithPortal portalElem={context.portalElem}>
        <WithInnerModalContext
          contextData={{
            close: closeModal,
            closeEnabled: data.closeEnabled === undefined ? true : !!data.closeEnabled,
          }}
        >
          <Modal initialSelector={data.initialSelector}>
            {typeof data.modal === 'function'
              ? data.modal({ onClose: closeModal })
              : React.cloneElement(data.modal as any, {
                  onClose: closeModal,
                  meta: meta,
                })}
          </Modal>
        </WithInnerModalContext>
      </WithPortal>
    ) : undefined,
  };
}

function WithInnerModalContext(props: { children: ReactNode; contextData: { close(): void; closeEnabled: boolean } }) {
  return <ModalInnerContext.Provider value={props.contextData}>{props.children}</ModalInnerContext.Provider>;
}

function WithPortal(props: { portalElem?: HTMLDivElement | null; children: ReactNode }) {
  const { portalElem, children } = props;
  if (!portalElem) {
    throw new Error('Portal elem not ready');
  }
  return ReactDOM.createPortal(children, portalElem);
}

export function useModalContent() {
  return useContext(ModalInnerContext);
}
