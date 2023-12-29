import { createContext, useContext } from "react";

import emptyFn from "@/utils/empty-fn";

export const ModalContext = createContext<{
  onClose: () => void;
}>({
  onClose: emptyFn,
});

export const useModalContext = () => useContext(ModalContext);
