import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const rootCardStyle = style({
  padding: "1rem",
  border: `1px solid ${theme.colors.foregroundSelectionBackground}`,
  borderRadius: theme.radius.md,
  backgroundColor: theme.colors.contrastedForeground,
  minWidth: "150px",
  minHeight: "150px",
  textAlign: "center",
  cursor: "pointer",
  transition: "0.3s",
  selectors: {
    "&:hover": {
      boxShadow: `0 0 0 1px ${theme.colors.foregroundSelectionBackground}`,
      outline: "none",
    },
    "&:active": {
      backgroundColor: theme.colors.foregroundSelectionBackground,
    },
  },
});

export const cardContentStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
});

export const cardTitleStyle = style({
  fontSize: theme.fontSize.md,
});
