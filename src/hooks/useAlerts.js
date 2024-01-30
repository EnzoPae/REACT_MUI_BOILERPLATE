import { useState } from "react";

export const useAlerts = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(null);
  const [severity, setSeverity] = useState(null);

  const alertSuccess = (msj) => {
    setText(msj);
    setSeverity("success");
    setOpen(true);
  };
  const alertError = (msj) => {
    setText(msj);
    setSeverity("error");
    setOpen(true);
  };
  const alertInfo = (msj) => {
    setText(msj);
    setSeverity("info");
    setOpen(true);
  };
  const alertWarning = (msj) => {
    setText(msj);
    setSeverity("warning");
    setOpen(true);
  };

  return {
    alertSuccess,
    alertError,
    alertInfo,
    alertWarning,
    open,
    setOpen,
    text,
    severity,
  };
};
