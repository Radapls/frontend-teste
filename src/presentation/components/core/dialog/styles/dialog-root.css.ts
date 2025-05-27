import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const dialog = style({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "none",
  padding: "2rem",
  borderRadius: theme.radius.lg,
  background: theme.colors.contrastedForeground,
  zIndex: 1001,
  color: theme.colors.primaryForeground,
  fontSize: theme.fontSize.md
});

export const backdrop = style({
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: "100vw",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(3px)",
  zIndex: 1000,
});

export const actions = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: "1rem",
  marginTop: "1rem",
});
