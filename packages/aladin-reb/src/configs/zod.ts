import { z } from "zod";

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  if (issue.code === z.ZodIssueCode.invalid_type) {
    if (issue.expected === "string") {
      return { message: "bad type!" };
    }
  }

  if (issue.code === z.ZodIssueCode.custom) {
    return { message: `less-than-${(issue.params || {}).minimum}` };
  }

  if (issue.code === z.ZodIssueCode.too_small) {
    return { message: `Phải có ít nhất ${issue.minimum} ký tự` };
  }

  if (issue.code === z.ZodIssueCode.too_big) {
    return { message: `Không được vượt quá ${issue.maximum} ký tự` };
  }

  return { message: ctx.defaultError };
};

z.setErrorMap(customErrorMap);

export default z;
