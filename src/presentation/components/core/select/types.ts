export interface SelectRootProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface SelectOptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {}


export interface SelectFieldProps<T>
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: T[];
  hasError?: boolean;
  itemsPerPage?: number;
  withPlaceholder?: boolean;
  getOptionValue: (option: T) => string | number;
  getOptionLabel: (option: T) => string;
  onSelectChange: (value: T) => void;
}
