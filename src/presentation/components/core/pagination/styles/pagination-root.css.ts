import { style } from '@vanilla-extract/css';

export const pagination = style({
  display: 'flex',
  gap: '8px',
  justifyContent: 'center',
});

export const button = style({
  padding: '6px 12px',
  border: '1px solid #ccc',
  background: 'white',
  cursor: 'pointer',
  selectors: {
    '&[disabled]': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
    '&[aria-current="page"]': {
      fontWeight: 'bold',
      backgroundColor: '#eee',
    },
  },
});


export const paginationContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '2rem',
  width: "100%",
})
export const selectContainer = style({})
