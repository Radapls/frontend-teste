import { globalStyle, style } from "@vanilla-extract/css";

export const centralFiltersStyle = style({
  display: "grid",
  gridTemplateColumns: "0.5fr 4fr 4fr 2fr ",
  width: '100%',
  gap: "2rem",
});


globalStyle(`${centralFiltersStyle} > :last-child`, {
  alignSelf: "flex-end",
});