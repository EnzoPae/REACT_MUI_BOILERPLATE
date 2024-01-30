//auth context
import { useAuthContext } from "../../context/authContext";
//custom components
import { AppBar } from "../helper/appbar";
import CustomMenuButton from "../../components/menubutton/menubutton";
//MUI
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Topbar({ open, setOpen }) {
  const { logout, auth, user } = useAuthContext();
  const menuItems = [
    {
      label: "Cerrar sesión",
      icon: <LogoutIcon />,
      onClick: () => logout(),
    },
  ];
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar sx={{ display: "flex" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpen(true)}
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          React - MUI Boilerplate
        </Typography>
        {auth ? (
          <CustomMenuButton
            label={user.name}
            items={menuItems}
            sx={{ ml: "auto" }}
          />
        ) : null}
      </Toolbar>
    </AppBar>
  );
}
