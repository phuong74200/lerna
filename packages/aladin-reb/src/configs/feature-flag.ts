import { useContext } from "react";

import { FL_DEV, FL_TEST, MODE } from "@/configs/env";
import FeatureFlagManager, { FeatureFlagManagerType } from "@/modules/feature-flag-manager";

export enum FLAGS {
  PROFILE = "profile",
  DEV = "dev",
  DEV_DARK_MODE = "dev_dark_mode",
  TEST = "test",
  DEV_CUSTOM_THEME = "dev_custom_theme",
  GOOGLE_OAUTH = "google_oauth",
  DANGEROUS_ACTION = "dangerous_action", // dangerous action included delete APIs for admin
}

const featureFlagManager = new FeatureFlagManager({
  [FLAGS.PROFILE]: true,
  [FLAGS.DEV]: FL_DEV || MODE === "development",
  [FLAGS.TEST]: FL_TEST || MODE === "test",
  [FLAGS.DEV_DARK_MODE]: false,
  [FLAGS.DEV_CUSTOM_THEME]: true,
  [FLAGS.GOOGLE_OAUTH]: false,
  [FLAGS.DANGEROUS_ACTION]: true,
});

export const FeatureFlagProvider = featureFlagManager.FeatureFlagProvider;
export const FeatureFlag = featureFlagManager.FeatureFlag;
export const FeatureFlagContext = featureFlagManager.FeatureFlagContext;

export type Feature = FeatureFlagManagerType<typeof featureFlagManager>;

export const useFeatureFlagContext = () => useContext(FeatureFlagContext);
export const useFeatureFlag = featureFlagManager.useFeatureFlag;
export const useFeatureFlags = featureFlagManager.useFeatureFlags;
export const useHelper = featureFlagManager.useHelper;
