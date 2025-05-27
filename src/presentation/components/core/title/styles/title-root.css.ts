import { style } from '@vanilla-extract/css';

import { theme } from '../../../styles/theme/theme.css';

export const titleRootStyle = style({
  display: 'inline-flex',

  color: theme.colors.primaryForeground,
  fontWeight: 'bold',
  fontFamily: theme.fonts.primary,
});

export const titleRootLargeStyle = style({
  gap: '1.2rem',
  fontSize: theme.fontSize.xl,
  alignItems: 'center',
});

export const titleRootMediumStyle = style({
  gap: '1rem',
  fontSize: theme.fontSize.sm,
  alignItems: 'center',
});

export const titleRootSmallStyle = style({
  gap: '0.8rem',
  alignItems: 'center',
  fontSize: theme.fontSize.xs,
});
