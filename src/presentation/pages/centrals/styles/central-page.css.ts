import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const centralPageContainerStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  padding: '0 2rem'
});

export const centralPageSubtitleStyle = style({
  fontSize: theme.fontSize.xs,
  color: theme.colors.primaryForeground,
});
