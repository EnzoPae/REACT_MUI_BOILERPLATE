import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const FormikButton = ({ text, disabled, loading }) => {
  return (
    <Box sx={{ my: 2, position: "relative" }}>
      <Button type="submit" disabled={disabled} fullWidth variant="contained">
        {text ? text : ""}
      </Button>
      {loading && (
        <CircularProgress
          size={20}
          sx={{
            color: "blue",
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: "-12px",
            marginLeft: "-12px",
          }}
        />
      )}
    </Box>
  );
};

export default FormikButton;
