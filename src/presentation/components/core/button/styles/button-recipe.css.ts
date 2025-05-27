import { recipe } from '@vanilla-extract/recipes';

import * as styles from './button-root.css';

export const tableRootRecipe = recipe({
  base: styles.buttonContainerStyle,
  variants: {
    size: {
      small: styles.buttonSmallStyle,
      medium: styles.buttonMediumStyle,
      large: styles.buttonLargeStyle,
    },
  },
  defaultVariants: {
    size: 'large',
  },
});
