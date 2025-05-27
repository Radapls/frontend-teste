import { SelectOption } from "./select-option";
import { selectRecipe } from "./styles/select-recipe.css";
import { SelectFieldProps } from "./types";

export function SelectField<T>(props: SelectFieldProps<T>) {
  const {
    id,
    options,
    onSelectChange,
    getOptionValue,
    getOptionLabel,
    value,
    hasError,
    withPlaceholder = true,
  } = props;

  return (
    <select
      id={id}
      className={selectRecipe({ validation: hasError ? "error" : "default" })}
      value={value ?? ""}
      onChange={(e) => onSelectChange(e.target.value as T)}
    >
      {withPlaceholder && (
        <SelectOption value="" disabled hidden>
          Selecione
        </SelectOption>
      )}
      {options.map((option) => {
        const val = getOptionValue(option);
        const label = getOptionLabel(option);
        return (
          <SelectOption key={val} value={val}>
            {label}
          </SelectOption>
        );
      })}
    </select>
  );
}
