import { style } from "@vanilla-extract/css";
import { theme } from "../../../styles/theme/theme.css";

export const tableRootStyle = style({
  width: "100%",
  borderCollapse: "collapse",
  fontFamily: theme.fonts.primary,
  fontSize: theme.fontSize.xs,
  color: theme.colors.primaryForeground,
  border: `1px solid ${theme.colors.neutral}`,
});

export const body = style({
  borderRadius: theme.radius.xl,
});

export const header = style({
  backgroundColor: theme.colors.background,
  color: theme.colors.neutral,
  textAlign: "center",
  padding: "1rem",
});

export const row = style({
  cursor: "pointer",
  transition: '0.2s',
  textAlign: 'center',
  selectors: {
    "&:nth-child(even)": {
      backgroundColor: theme.colors.contrastedForeground,
    },
    "&:hover": {
      backgroundColor: theme.colors.successNeutral,
    },

       "&:active": {
      backgroundColor: theme.colors.hoveredSuccess,
    },
  },
});

export const cell = style({
  padding: "1rem",
  borderBottom: `1px solid ${theme.colors.neutral}`,
});

export const tableContainer = style({
  overflowX: "auto",
});
