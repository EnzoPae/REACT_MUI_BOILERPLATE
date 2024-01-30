import { useState } from "react";
import { Box } from "@mui/system";
import { StyledMenubutton } from "./styledMenubutton";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MapMenuItems from "./mapMenuItems";

const CustomMenuButton = ({ label, icon, items, sx }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={sx}>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={icon ? icon : <KeyboardArrowDownIcon />}
        sx={{ textWrap: "nowrap" }}
      >
        {label ? label : null}
      </Button>
      <StyledMenubutton
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MapMenuItems items={items} />
      </StyledMenubutton>
    </Box>
  );
};

export default CustomMenuButton;
