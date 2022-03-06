/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { PropsWithChildren, useCallback, useRef } from 'react';

const SELECTION = 'button,a,[tabIndex],input,textarea';

type ModalProps = PropsWithChildren<{
  //
  initialSelector?: string;
}>;
export function Modal(props: ModalProps) {
  const focusFirst = useRef<HTMLDivElement | null>(null);
  const focusLast = useRef<HTMLDivElement | null>(null);
  const modal = useRef<HTMLDivElement | null>(null);

  const focusOnFirst = useCallback(() => {
    const search = modal.current?.querySelector(SELECTION);

    search && (search as HTMLElement).focus();
  }, []);

  const setModal = useCallback(
    (ref) => {
      modal.current = ref;
      if (ref) {
        const input = modal.current?.querySelector(props.initialSelector || 'input,textarea,select');
        if (input) {
          (input as HTMLElement).focus();
        } else {
          focusOnFirst();
        }
      }
    },
    [modal, focusOnFirst, props.initialSelector]
  );

  const focusOnLast = useCallback(() => {
    const search = modal.current?.querySelectorAll(SELECTION);
    if (!search) {
      return;
    }
    search?.length > 0 && (search[search?.length - 1] as HTMLElement).focus();
  }, []);

  return (
    <div className="Modal">
      <div ref={focusFirst} onFocus={focusOnLast} tabIndex={0} />
      <div ref={setModal} className="Modal__children">
        {props.children}
      </div>
      <div ref={focusLast} onFocus={focusOnFirst} tabIndex={0} />
    </div>
  );
}
