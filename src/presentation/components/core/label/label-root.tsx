import React from "react";
import { LabelRecipe } from "./styles/label-recipe.css";
import { LabelRootProps } from "./types";


export const LabelRoot: React.FC<LabelRootProps> = ({ children, hasError, ...rest }) => {
  return (
    <label
      className={LabelRecipe({ validation: hasError ? "error" : "default" })}
      {...rest}
    >
      {children}
    </label>
  );
};
