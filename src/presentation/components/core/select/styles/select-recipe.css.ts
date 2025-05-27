import { recipe } from "@vanilla-extract/recipes";
import * as styles from './select-root.css'
import { selectFieldErrorStyles, selectFieldStyles } from "./select-field.css";


export const selectRecipe = recipe({
  base: styles.selectRootContainerStyles,
  variants: {
    validation: {
      default: selectFieldStyles,
      error: selectFieldErrorStyles,
    },
  },
  defaultVariants: {
    validation: "default",
  },
});
