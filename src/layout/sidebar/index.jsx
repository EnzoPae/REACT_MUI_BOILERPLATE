//auth context
import { useAuthContext } from "../../context/authContext";
//hooks
import { useNavigate } from "react-router-dom";
//logo
import logo from "../../assets/react.svg";
//custom components
import { DrawerHeader } from "../helper/drawerHeader";
//icons
import { ICONS_MAP } from "../helper/icons";
//MUI
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const DRAWER_WIDTH = 240;

export default function Sidebar({ open, setOpen }) {
  const { routes } = useAuthContext();
  const nav = useNavigate();
  return (
    <Drawer
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <img
          src={logo}
          alt="terminales y servicios logo"
          style={{ marginLeft: "0.5em" }}
        />
        <IconButton onClick={() => setOpen(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {routes.map((route, index) =>
          route.display ? (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => nav(route.path)}>
                <ListItemIcon>
                  {ICONS_MAP[route.icon] ? (
                    ICONS_MAP[route.icon]
                  ) : (
                    <KeyboardArrowRightIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={route.label} />
              </ListItemButton>
            </ListItem>
          ) : null
        )}
      </List>
    </Drawer>
  );
}
