import { style } from "@vanilla-extract/css";

export const mainLayoutStyle = style({
  paddingLeft: "1rem",
  display: "flex",
  flexDirection: "row",
});

export const containerPageStyles = style({
  width: '100dvw',
  height: '100dvh',

  display: "flex",
  flexDirection: "column",
  gap: '1rem'
});