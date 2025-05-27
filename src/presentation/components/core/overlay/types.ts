import { ReactNode, HTMLAttributes } from "react";

export interface RootOverlayProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  onClose: () => void;
  children: ReactNode;
}
