import { style } from '@vanilla-extract/css';

export const scrollAreaRootStyle = style({
  position: 'relative',
  width: '100%',
  height: '400px',
  overflow: 'hidden',
});

export const scrollAreaViewportStyle = style({
  paddingRight: '0.5rem',
  height: '100%',
  overflow: 'auto',
});