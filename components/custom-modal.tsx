// custom-modal.tsx

import React, { FC, memo, useEffect, useState, ReactNode } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useRouter } from "next/router";

interface IProps {
  name: string;
  hideModal: () => void;
  visible: boolean;
  children: ReactNode;
}

const CustomModal: FC<IProps> = ({ name, hideModal, visible, children }) => {
  const [showModal, setShowModal] = useState<boolean>(visible || false);
  const router = useRouter();
  const hasHash = router.asPath.includes("#");

  const open = () => {
    if (!hasHash) {
      router.push(
        {
          pathname: router.pathname,
          query: { ...router.query },
          hash: name + ""
        },
        undefined,
        { scroll: false }
      );
    }
    setShowModal(true);
  };

  const close = () => {
    hideModal();
    setShowModal(false);
    if (showModal) {
      router.back();
    }
  };
  const clickOutSide = () => {
    hideModal();
    setShowModal(false);
  };

  useEffect(() => {
    visible && open();
  }, [visible]);
  useEffect(() => {
    if (!hasHash && showModal) hideModal(), setShowModal(false);
  }, [hasHash]);

  return (
    <Modal open={showModal} onClose={close} onOverlayClick={close} closeOnEsc>
      {children}
    </Modal>
  );
};

export default memo(CustomModal);
