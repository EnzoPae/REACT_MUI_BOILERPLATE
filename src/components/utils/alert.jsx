import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const CustomAlert = ({ open, setOpen, text, severity }) => {
  const severityValidation = severity ? severity : "info";
  const textValidation =
    typeof text === "string" ? text : "Param text/msj is not a string";
  return (
    <Snackbar
      open={open}
      onClose={() => setOpen(false)}
    >
      <Alert
        onClose={() => setOpen(false)}
        severity={severityValidation}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {text ? textValidation : "Param text/msj is null"}
      </Alert>
    </Snackbar>
  );
};

export default CustomAlert;
