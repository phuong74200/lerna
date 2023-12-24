import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { QueryClientProvider } from "@tanstack/react-query";

import Loading from "@/common/ui/loading";
import { FeatureFlagProvider, FLAGS, useFeatureFlag, useHelper } from "@/configs/feature-flag";
import { customMantineTheme } from "@/configs/mantine-theme";
import { queryClient } from "@/configs/react-query";
import { UserContextProvider } from "@/context/user";
import SyncTailwindColorScheme from "@/modules/sync-tailwind-color-scheme";
import { browserRouter } from "@/router";

import "@/configs/zod";
import "@/configs/dayjs";

import "./index.scss";

function Theme() {
  const [colorScheme, setColorScheme] = useFeatureFlag(FLAGS.DEV_DARK_MODE);
  const { all: checkDevCustomTheme } = useHelper(FLAGS.DEV, FLAGS.DEV_CUSTOM_THEME);

  const customTheme = checkDevCustomTheme() ? customMantineTheme : undefined;

  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value === "dark");

  const scheme = colorScheme ? "dark" : "light";

  return (
    <ColorSchemeProvider colorScheme={scheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ ...customTheme, colorScheme: scheme }}
      >
        <ModalsProvider>
          <SyncTailwindColorScheme scheme={scheme} />
          <RouterProvider router={browserRouter} fallbackElement={<Loading />}></RouterProvider>
        </ModalsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <UserContextProvider>
        <FeatureFlagProvider>
          <QueryClientProvider client={queryClient}>
            <Theme />
          </QueryClientProvider>
        </FeatureFlagProvider>
      </UserContextProvider>
    </Suspense>
  );
}

export default App;
