import { theme } from '@components/styles/theme/theme.css';
import { style } from '@vanilla-extract/css';

export const buttonContainerStyle = style({
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.6rem 1.2rem',
  backgroundColor: theme.colors.success,
  color: '#fff',
  borderRadius: '0.5rem',
  fontWeight: '700',
  fontSize: theme.fontSize.xs,
  lineHeight: '1.2',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease, transform 0.1s ease',

  selectors: {
    '&:hover': {
      backgroundColor: theme.colors.successNeutral,
    },
    '&:active': {
      transform: 'scale(0.97)',
    },
    '&:disabled': {
      backgroundColor: theme.colors.disabledBackground,
      cursor: 'not-allowed',
      transform: 'none'
    },
  },
});

export const buttonSmallStyle = style({

});

export const buttonMediumStyle = style({

});

export const buttonLargeStyle = style({

});

