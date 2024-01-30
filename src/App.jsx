import { useState } from "react";
//alert provider
import AlertProvider from "./context/alertContext";
//custom components
import Sidebar from "./layout/sidebar";
import Topbar from "./layout/topbar";
import ContentArea from "./layout/contentArea";
//MUI
import { Box } from "@mui/system";

function App() {
  const [open, setOpen] = useState(true);
  return (
    <AlertProvider>
      <Box sx={{ display: "flex" }}>
        <Topbar open={open} setOpen={setOpen} />
        <Sidebar open={open} setOpen={setOpen} />
        <ContentArea open={open} />
      </Box>
    </AlertProvider>
  );
}

export default App;
