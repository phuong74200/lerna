const permission = [
  "Super",
  "Role",
  "Institution",
  "Class",
  "Student",
  "TA",
  "Notification",
  "Finance",
  "Marketing",
  "Manager",
] as const;

const access = ["FullAccess", "View", "AccessDenied"] as const;

const role = ["Super_Admin", "TA", "Student", "Manager"] as const;
const interactions = ["Interact"] as const;
const status = ["FULL_INFORMATION_REQUIRED", "VERIFICATION_REQUIRED"] as const;

type RoleInteraction = `${(typeof role)[number]}_${(typeof interactions)[number]}`;

export type Permission =
  | `${(typeof permission)[number]}_${(typeof access)[number]}`
  | RoleInteraction
  | (typeof status)[number];
