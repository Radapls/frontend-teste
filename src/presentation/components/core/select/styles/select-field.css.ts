import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const selectFieldStyles = style({
  appearance: "none",
  padding: "0.5rem 0.75rem",
  borderRadius: "0.375rem",
  border: `1px solid ${theme.colors.neutral}`,
  fontSize: "1rem",
  backgroundColor: theme.colors.contrastedForeground,
  color: theme.colors.neutral,
  cursor: "pointer",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  selectors: {
    "&:focus": {
      borderColor: theme.colors.foregroundSelectionBackground,
      boxShadow: `0 0 0 1px ${theme.colors.foregroundSelectionBackground}`,
      outline: "none",
    },
  },
});


export const selectFieldErrorStyles = style({
  appearance: "none",
  padding: "0.5rem 0.75rem",
  borderRadius: "0.375rem",
  border: `1px solid ${theme.colors.error}`,
  fontSize: "1rem",
  backgroundColor: theme.colors.contrastedForeground,
  color: theme.colors.error,
  cursor: "pointer",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  selectors: {
    "&:focus": {
      borderColor: theme.colors.error,
      boxShadow: `0 0 0 1px ${theme.colors.error}`,
      outline: "none",
    },
  },
});
