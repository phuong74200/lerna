import { createContext, Dispatch } from "react";
import { UseFormReturnType } from "@mantine/form";

import { components } from "@/api/v1";

type ContextType = {
  generalForm: UseFormReturnType<components["schemas"]["RegisterTARequest"]>;
  activeStep: number;
  setStep: Dispatch<React.SetStateAction<number>>;
};

export const TAFormContext = createContext<ContextType>({} as ContextType);
