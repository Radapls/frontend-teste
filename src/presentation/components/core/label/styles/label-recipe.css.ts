import { recipe } from "@vanilla-extract/recipes";
import * as styles from './label-root.css'

export const LabelRecipe = recipe({
  base: styles.rootLabelStyles,
  variants: {
    validation: {
      default: {},
      error: styles.labelErrorStyles
    },
  },
  defaultVariants: {
    validation: "default",
  },
});
