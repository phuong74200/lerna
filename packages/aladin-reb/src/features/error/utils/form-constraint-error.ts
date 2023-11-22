import { UseFormReturnType } from "@mantine/form";

import { ConstraintError } from "@/types/constraint-error";

export default function formConstraintError<T extends Record<string, string>>(
  error: ConstraintError<T>,
  form: UseFormReturnType<T>,
) {
  const { setErrors } = form;
  const { violations } = error;

  const errors = violations.reduce<Record<keyof T, string>>(
    (acc, error) => ({
      ...acc,
      [error.field.toString().split(".").pop() || ""]: error.message,
    }),
    {} as Record<keyof T, string>,
  );

  setErrors(errors);
}
