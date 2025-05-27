import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const mainPageContainerStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  alignItems: "flex-start",
  paddingLeft: "2rem",
  paddingRight: '2rem'
});

export const mainPageSubtitleStyle = style({
  fontSize: theme.fontSize.xs,
  color: theme.colors.primaryForeground,
});

export const mainCardGridStyle = style({
  display: "flex",
  gap: "1rem",
});

export const mainPageCardStyle = style({
  padding: "1rem",
  border: `1px solid ${theme.colors.foregroundSelectionBackground}`,
  borderRadius: theme.radius.md,
  backgroundColor: theme.colors.contrastedForeground,
  minWidth: "150px",
  minHeight: "150px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  fontSize: "1rem",
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: '0.3s',
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
