import { globalStyle } from "@vanilla-extract/css";

import { BREAKPOINTS } from "@components/styles/theme/breakpoints";
import { theme } from "@components/styles/theme/theme.css";

globalStyle("*, *::before, *::after", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  border: "none",
});

globalStyle("*::selection", {
  backgroundColor: theme.colors.foregroundSelectionBackground,
});

globalStyle("*:focus", {
  outline: 0,
});

globalStyle("html", {
  fontSize: "initial",
  "@media": {
    [`screen and ${BREAKPOINTS.xs}`]: {
      fontSize: "30%",
    },
    [`screen and ${BREAKPOINTS.sm}`]: {
      fontSize: "40%",
    },
    [`screen and ${BREAKPOINTS.md}`]: {
      fontSize: "60%",
    },
    [`screen and ${BREAKPOINTS.lg}`]: {
      fontSize: "70%",
    },
    [`screen and ${BREAKPOINTS.xl}`]: {
      fontSize: "80%",
    },
  },
});

globalStyle("body", {
  minHeight: "100dvh",
  fontFamily: theme.fonts.primary,
  WebkitFontSmoothing: "antialiased",
  backgroundColor: theme.colors.background,
  color: theme.colors.primaryForeground,
});
