import React from "react";
import * as styles from "./styles/dialog-root.css";
import { DialogProps } from "./types";
import { Button } from "../button";

export const DialogRoot: React.FC<DialogProps> = (props) => {
  const { message, onConfirm, onCancel, open, onClose } = props;
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  React.useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  React.useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      onClose();
    };

    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onCancel?.();
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === "Escape") {
      onCancel?.();
      onClose();
    }
  };

  const handleCancel = () => {
    onCancel?.();
    onClose();
  };

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <>
      {open && (
        <div className={styles.backdrop} onClick={handleBackdropClick} />
      )}
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        onKeyDown={handleKeyDown}
        aria-modal="true"
        role="dialog"
      >
        <p>{message}</p>
        <div className={styles.actions}>
          <Button onClick={handleCancel}>Cancelar</Button>
          <Button onClick={handleConfirm}>Confirmar</Button>
        </div>
      </dialog>
    </>
  );
};
