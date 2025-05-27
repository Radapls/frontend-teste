import { FC } from "react";
import { SelectOptionProps } from "./types";

export const SelectOption: FC<SelectOptionProps> = ({ children, ...rest }) => {
  return (
    <option {...rest}>
      {children}
    </option>
  );
};
