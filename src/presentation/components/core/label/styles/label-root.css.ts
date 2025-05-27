import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const rootLabelStyles = style({
  fontWeight: "bold",
  fontSize: theme.fontSize.xs,
  color: theme.colors.neutral,
});

export const labelErrorStyles = style({
  color: theme.colors.error,
});
