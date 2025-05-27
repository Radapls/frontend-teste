import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const inputDefaultVariantStyles = style({
  padding: "0.5rem 0.75rem",
  borderRadius: theme.radius.md,
  border: `1px solid ${theme.colors.neutral}`,
  fontSize: "1rem",
  outline: "none",
  transition: "0.3s",
  color: theme.colors.neutral,
  backgroundColor: theme.colors.contrastedForeground,
  selectors: {
    "&:focus": {
      borderColor: theme.colors.foregroundSelectionBackground,
    },
  },
});

export const inputErrorVariantStyles = style({
  padding: "0.5rem 0.75rem",
  borderRadius: theme.radius.md,
  border: `1px solid ${theme.colors.error}`,
  color: theme.colors.error,
  fontSize: "1rem",
  outline: "none",
  transition: "0.3s",
  backgroundColor: theme.colors.contrastedForeground,
  selectors: {
    "&:focus": {
      borderColor: theme.colors.error,
    },
  },
});
