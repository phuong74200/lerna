import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalRootProps } from "@mantine/core/lib/Modal/ModalRoot/ModalRoot";

type ReturnType = {
  open: boolean;
  goBack: () => void;
  controller: ModalRootProps;
};

export default function useModalRouteTrasition(): ReturnType {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const exited = useRef(false);

  useEffect(() => setOpen(true), []);

  const goBack = () => {
    setOpen(false);
  };

  return {
    open,
    goBack,
    controller: {
      opened: open,
      onClose: goBack,
      transitionProps: {
        onExited: () => {
          if (exited.current === false) {
            navigate(-1);
            exited.current = true;
          }
        },
      },
    },
  };
}
