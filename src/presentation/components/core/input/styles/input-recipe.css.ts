import { recipe } from "@vanilla-extract/recipes";
import {
  inputDefaultVariantStyles,
  inputErrorVariantStyles,
} from "./input-field.css";
import * as styles from "./input-root.css";

export const inputRecipe = recipe({
  base: styles.inputContainerStyles,
  variants: {
    validation: {
      default: inputDefaultVariantStyles,
      error: inputErrorVariantStyles,
    },
  },
  defaultVariants: {
    validation: "default",
  },
});
