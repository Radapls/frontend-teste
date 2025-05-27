import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const createCentralFormStyles = style({
  color: theme.colors.primaryForeground,
  display: "flex",
  flexDirection: 'column',
  gap: '1rem',
  cursor: 'pointer',
  minWidth: '3fr'
});
