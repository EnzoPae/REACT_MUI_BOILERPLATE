import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CustomLink = ({ text, path, ...props }) => {
  const nav = useNavigate();
  return (
    <Link
      {...props}
      onClick={() => nav(path)}
      sx={{ cursor: "pointer" }}
      variant="body2"
    >
      {text ? text : ""}
    </Link>
  );
};

export default CustomLink;
