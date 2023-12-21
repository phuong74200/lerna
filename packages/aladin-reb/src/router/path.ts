interface C {
  [key: string]: C;
}

export const PATH = {
  "/login": {},
  "/register": {
    verify: {},
  },
  "/recovery": {
    reset: {},
    otp: {},
  },
  "/admin": {
    institution: {
      create: {},
      update: {
        ":institutionId": {},
      },
      ":institutionId": {},
    },
    voucher: {
      create: {},
    },
    student: {
      ban: {
        ":userId": {},
      },
    },
    lecture: {},
    discount: {
      create: {},
    },
    mod: {
      create: {},
    },
    subject: {
      create: {},
      ":subjectId": {
        update: {},
      },
    },
    major: {
      create: {},
      ":majorId": {
        update: {},
      },
    },
  },
  "/usr": {},
};

type ParamKey = `:${string}`;

type PathKeys<T> = T extends C
  ? {
      [K in keyof T]:
        | K
        | `${K & string}/${PathKeys<T[K]> extends ParamKey ? string : PathKeys<T[K]>}`;
    }[keyof T]
  : never;

export type Path = "/" | "*" | PathKeys<typeof PATH>;
