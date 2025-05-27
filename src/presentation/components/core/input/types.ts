import { Props } from "react-input-mask";

export interface InputRootProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  mask?: string;
  hasError?: boolean;
}

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement>, Pick<Props, 'maskChar'> {
  mask?: string;
  hasError?: boolean;
}

export interface InputErrorProps extends React.HTMLAttributes<HTMLSpanElement> {}