import { useField } from "formik";
import TextField from "@mui/material/TextField";

const FormikInput = ({ label, disabled, variant, type, ...props }) => {
  const [field, meta] = useField(props);
  const variantMUI = variant ? variant : "outlined";
  return (
    <TextField
      {...field}
      {...props}
      //config
      fullWidth
      label={label}
      disabled={disabled}
      variant={variantMUI}
      type={type ? type : null}
      sx={{ my: 1 }}
      //errors
      error={meta.touched && meta.error ? true : false}
      helperText={meta.touched && meta.error ? meta.error : null}
    />
  );
};

export default FormikInput;
