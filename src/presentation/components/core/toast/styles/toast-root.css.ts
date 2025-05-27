import { theme } from "@components/styles/theme/theme.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const toastRootContainerStyles = style({
  display: "flex",
  alignItems: 'center',
  gap: "0.5rem",
});

globalStyle('.Toastify__toast', {
  width: 'auto',
  borderRadius: theme.radius.md,
  backgroundColor: theme.colors.contrastedForeground,
  color: theme.colors.penWhite,
  padding: '1.5rem'
});


globalStyle('.Toastify__close-button', {
  color: theme.colors.penWhite,
});
