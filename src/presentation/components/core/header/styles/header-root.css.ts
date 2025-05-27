import { style } from '@vanilla-extract/css';

import { theme } from '../../../styles/theme/theme.css';

export const headerRootStyle = style({
  padding: '1rem 1rem 1rem 2rem',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  justifyContent: 'space-between',
  backgroundColor: 'transparent',
  borderBottom: `3px solid ${theme.colors.primarySurface}`,
});
