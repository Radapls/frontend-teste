import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const emptyStateRootStyles = style({
  display: "grid",
  placeItems: "center",
  textAlign: "center",
  gap: "0.75rem",
  padding: "2rem",
  minHeight: "300px",
  width: '100%'
});

export const emptyStateTitleStyle = style({
  fontSize: "1.25rem",
  fontWeight: "600",
  color: theme.colors.penWhite,
});
