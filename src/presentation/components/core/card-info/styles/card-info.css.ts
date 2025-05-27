import { style } from '@vanilla-extract/css';

import { theme } from '../../../styles/theme/theme.css';

export const cardInfoStyle = style({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.colors.secondarySurface,
    padding: '2rem',
    fontSize: "1.6rem",
    borderRadius: theme.radius.md,
    marginBottom: "1rem",
});