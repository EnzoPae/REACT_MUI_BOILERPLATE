import { useEffect } from "react";
import { useAlertsContext } from "../context/alertContext";

const Example = () => {
  const { alertInfo } = useAlertsContext();
  useEffect(() => {
    alertInfo("global alert example");
  }, []);
  return <div>Example.</div>;
};

export default Example;
