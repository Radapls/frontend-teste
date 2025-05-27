import React from "react";
import InputMask from "react-input-mask";
import {
  inputRecipe,
} from "./styles/input-recipe.css";
import { InputFieldProps } from "./types";


export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ mask,maskChar, hasError, ...rest }, ref) => {
    if (mask) {
      return (
        <InputMask
          mask={mask}
          maskChar={maskChar}
          {...rest}
        >
          {(inputProps: any) => (
            <input
              {...inputProps}
              {...rest}
              ref={ref}
              className={inputRecipe({ validation: hasError ? "error" : "default" })}
            />
          )}
        </InputMask>
      );
    }

    return (
      <input
        ref={ref}
        {...rest}
        className={inputRecipe({ validation: hasError ? "error" : "default" })}
      />
    );
  }
);
