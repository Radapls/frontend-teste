import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const inputContainerStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const inputErrorStyles = style({
  color: theme.colors.error,
});
