import { MantineThemeOverride } from "@mantine/core";

import { breakpoints, fontFamilyMonospace } from "@/configs/theme";
import { toMantineBreakpoint } from "@/utils/breakpoint-converter";

export const customMantineTheme: MantineThemeOverride = {
  breakpoints: toMantineBreakpoint(breakpoints),
  primaryColor: "blue",
  colorScheme: "dark",
  // fontFamily: "geist, sans-serif",
  fontFamilyMonospace,
  // radius: {
  //   lg: "0.875rem",
  // },
  colors: {
    "aladin-blue": [
      "#E3F3FF",
      "#BBE1FF",
      "#85BCFF",
      "#478EFF",
      "#296DFF",
      "#0B2FE5",
      "#0524C2",
      "#041EA0",
      "#031677",
      "#020E4B",
    ],
    "aladin-neutral": [
      "#F6F7FB",
      "#E9EBF5",
      "#DBDDEB",
      "#BEC3DA",
      "#969BB6",
      "#6B718E",
      "#4E536F",
      "#323753",
      "#232843",
      "#141624",
    ],
  },

  defaultRadius: "md",
  activeStyles: {
    // transform: "scale(0.97)",
    transform: "none",
  },

  components: {
    AppShell: {
      styles: () => ({
        root: {
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        },
        body: {
          flex: 1,
        },
        main: {
          minHeight: "unset",
        },
      }),
    },
    Container: {
      defaultProps: {
        sizes: toMantineBreakpoint(breakpoints),
      },
    },
    // Badge: {
    //   styles: (theme) => ({
    //     root: {
    //       borderRadius: theme.radius.md,
    //     },
    //   }),
    // },
    // Text: {},
    Button: {
      defaultProps: {
        size: "amd",
      },
      sizes: {
        amd: () => ({
          root: {
            height: "fit-content",
          },
          inner: {
            padding: "0px 1.125rem",
            height: "2.5rem",
          },
          icon: {
            width: "1.125rem",
            height: "1.125rem",
          },
        }),
      },
    },
    MultiSelect: {
      defaultProps: {
        size: "amd",
      },
      sizes: {
        amd: () => ({
          item: {
            padding: "0.5rem 0.5rem",
          },
          input: {
            padding: "0px 1.125rem",
            minHeight: "2.5rem",
          },
          values: {
            minHeight: "2.5rem",
          },
          defaultValueLabel: {
            paddingInline: "0.5rem",
          },
        }),
      },
    },
    Select: {
      defaultProps: {
        radius: "md",
      },
      styles: (theme) => ({
        input: {
          paddingBlock: theme.spacing.lg,
        },
      }),
    },
    DateTimePicker: {
      defaultProps: {
        radius: "md",
      },
      styles: () => ({
        input: {
          minHeight: "37px",
        },
      }),
    },
    TextInput: {
      defaultProps: {
        radius: "md",
      },
      styles: (theme) => ({
        input: {
          paddingBlock: theme.spacing.lg,
        },
      }),
    },
    NumberInput: {
      defaultProps: {
        radius: "md",
      },
      styles: (theme) => ({
        input: {
          paddingBlock: theme.spacing.lg,
        },
      }),
    },
    ActionIcon: {
      defaultProps: {
        size: "amd",
      },
      sizes: {
        amd: () => ({
          root: {
            width: 37,
            height: 37,
          },
        }),
      },
    },
    // Menu: {
    //   defaultProps: { radius: "lg" },
    // },
    Carousel: {
      styles: (theme) => ({
        viewport: {
          borderRadius: theme.radius.lg,
        },
      }),
    },
    Paper: {
      defaultProps: { radius: "lg" },
    },
    // Popover: {
    //   defaultProps: { radius: "lg" },
    // },
    // Select: {
    //   styles: (theme) => ({
    //     item: {
    //       borderRadius: theme.radius.lg,
    //     },
    //   }),
    // },
    InputWrapper: {
      styles: (theme) => ({
        label: {
          fontWeight: "bold",
          marginLeft: theme.radius.md,
          marginBottom: theme.radius.md,
        },
        error: {
          marginLeft: theme.radius.md,
          marginTop: theme.radius.md,
        },
      }),
    },

    // Tabs: {
    //   styles: (theme) => ({
    //     tab: {
    //       borderRadius: theme.radius.md,
    //     },
    //   }),
    // },
    Modal: {
      defaultProps: {
        overlayProps: {
          blur: 3,
          opacity: 0.3,
        },

        transitionProps: {
          exitTransitionDuration: 300,
          transition: "pop",
        },
      },

      styles: (theme) => ({
        header: {
          borderRadius: theme.radius.lg,
        },
      }),
    },
    // PinInput: {
    //   styles: (theme) => ({
    //     input: {
    //       borderRadius: theme.radius.lg,
    //     },
    //   }),
    // },
  },
};
