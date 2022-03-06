import React from 'react';

type ModalContextType = {
  portalElem?: HTMLDivElement | null;
  onModalOpen: (id: number) => void;
  onModalClose: (id: number) => void;
};
const defaultContext: ModalContextType = {
  portalElem: null,
  onModalOpen: () => {},
  onModalClose: () => {},
};

const ModalContext = React.createContext(defaultContext);

type ModalInnerContextType = {
  closeEnabled: boolean;
  close(): void;
};
const defaultInnerContext: ModalInnerContextType = {
  closeEnabled: true,
  close() {
    throw new Error('This component is not inside a modal');
  },
};
const ModalInnerContext = React.createContext(defaultInnerContext);

export { ModalContext, ModalInnerContext };
