import { createQueryKeys, mergeQueryKeys } from "@lukemorales/query-key-factory";

import { departmentKeys } from "@/api/department";
import { discountKeys } from "@/api/discount";
import { generalUserKeys } from "@/api/general-user";
import { institutionKeys } from "@/api/institution";
import { loginKeys } from "@/api/login";
import { majorKeys } from "@/api/major";
import { managerKeys } from "@/api/manager";
import { studentKeys } from "@/api/student";
import { subjectKeys } from "@/api/subject";
import { taKeys } from "@/api/ta";
import { voucherKeys } from "@/api/voucher";

export const welcomeKeys = createQueryKeys("welcome", {
  queryKeys: ["welcome"],
});

export const queryKeys = mergeQueryKeys(
  welcomeKeys,
  generalUserKeys,
  loginKeys,
  institutionKeys,
  majorKeys,
  subjectKeys,
  studentKeys,
  taKeys,
  voucherKeys,
  managerKeys,
  departmentKeys,
  discountKeys,
);
