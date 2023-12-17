import { components } from "@/api/v1";

export type TaRegisterForm = {
  step1: Omit<components["schemas"]["RegisterTARequest"], "subjectRegisters">;
};
