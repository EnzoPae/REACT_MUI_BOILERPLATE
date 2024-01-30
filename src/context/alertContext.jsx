import { createContext, useContext } from "react";
import CustomAlert from "../components/utils/alert";
import { useAlerts } from "../hooks/useAlerts";

const AlertsContext = createContext();
export const useAlertsContext = () => useContext(AlertsContext);

const AlertProvider = ({ children }) => {
  const {
    alertSuccess,
    alertError,
    alertInfo,
    alertWarning,
    open,
    setOpen,
    text,
    severity,
  } = useAlerts();

  return (
    <AlertsContext.Provider
      value={{ alertSuccess, alertError, alertInfo, alertWarning }}
    >
      {children}
      <CustomAlert
        open={open}
        setOpen={setOpen}
        text={text}
        severity={severity}
      />
    </AlertsContext.Provider>
  );
};

export default AlertProvider;
