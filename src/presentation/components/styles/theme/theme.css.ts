import { createGlobalTheme } from "@vanilla-extract/css";

import { COLOR_PALETTE } from "./color-palette";

export const theme = createGlobalTheme(":root", {
  colors: {
    primarySurface: COLOR_PALETTE.neutral[850],
    secondarySurface: COLOR_PALETTE.neutral[900],
    background: COLOR_PALETTE.neutral[950],

    primaryForeground: COLOR_PALETTE.neutral[50],
    primaryNormal: COLOR_PALETTE.neutral[250],
    hoveredPrimaryForeground: COLOR_PALETTE.green[600],
    secondaryForeground: COLOR_PALETTE.neutral[200],
    hoveredSecondaryForeground: COLOR_PALETTE.neutral[50],
    contrastedForeground: COLOR_PALETTE.neutral[850],

    neutral: COLOR_PALETTE.neutral[200],
    hoveredNeutral: COLOR_PALETTE.neutral[300],
    success: COLOR_PALETTE.green[500],
    successNeutral: COLOR_PALETTE.green[600],
    hoveredSuccessNeutral: COLOR_PALETTE.green[500],
    successWhite: COLOR_PALETTE.neutral[950],
    penWhite: COLOR_PALETTE.neutral[50],
    hoveredSuccess: COLOR_PALETTE.green[400],
    attention: COLOR_PALETTE.yellow[500],
    hoveredAttention: COLOR_PALETTE.yellow[500],
    alert: COLOR_PALETTE.red[400],
    hoveredAlert: COLOR_PALETTE.red[400],

    error: COLOR_PALETTE.red[300],

    disabledBackground: COLOR_PALETTE.neutral[300], // TO DO
    disabledForeground: COLOR_PALETTE.neutral[300], // TO DO

    highlightSuccessEntrypoint: COLOR_PALETTE.alpha.green[500],
    highlightSuccessEndpoint: COLOR_PALETTE.alpha.neutral[50],
    highlightAttentionEntrypoint: COLOR_PALETTE.alpha.yellow[500],
    highlightAttentionEndpoint: COLOR_PALETTE.alpha.neutral[50],
    highlightAlertEntrypoint: COLOR_PALETTE.alpha.red[500],
    highlightAlertEndpoint: COLOR_PALETTE.alpha.neutral[50],

    foregroundSelectionBackground: COLOR_PALETTE.green[500],
    hoveredOptionBackground: COLOR_PALETTE.neutral[650],
    primaryItemListSurface: COLOR_PALETTE.neutral[750],
    secondaryItemListSurface: COLOR_PALETTE.neutral[650],
    actionRipple: COLOR_PALETTE.alpha.neutral[800],

    tableColorPrimary: COLOR_PALETTE.neutral[850],
    tableRowOdd: COLOR_PALETTE.neutral[860],
    tableRowEven: COLOR_PALETTE.neutral[700],
  },
  fonts: {
    primary: "var(--nunito-font), sans-serif",
  },
  spacing: {
    none: "0",
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "2.5rem",
    xxl: "3rem",
  },
  fontSize: {
    xs: "1rem",
    sm: "1.5rem",
    md: "2rem",
    lg: "2.5rem",
    xl: "3rem"
  },
  radius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    full: "9999px",
  },
  transition: {
    fast: "0.2s ease-in-out",
    normal: "0.3s ease-in-out",
    slow: "0.5s ease-in-out",
  },
  shadow: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 2px 4px rgba(0, 0, 0, 0.1)",
    lg: "0 4px 8px rgba(0, 0, 0, 0.15)",
  },
});
