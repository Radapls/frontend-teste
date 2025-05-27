export interface DialogProps {
  message: string;
  onConfirm: () => void;
  onCancel?: () => void;
  open: boolean;
  onClose: () => void;
}


