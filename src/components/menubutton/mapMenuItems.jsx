import MenuItem from "@mui/material/MenuItem";

const MapMenuItems = ({ items }) => {
  if (!items) return null;
  return items.map((item, index) => (
    <MenuItem key={index} onClick={item.onClick} disableRipple>
      {item.icon}
      {item.label}
    </MenuItem>
  ));
};

export default MapMenuItems;
