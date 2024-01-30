//enrutador
import RoutesHandler from "../../routes";
//custom componets
import { Main } from "../helper/main";
import { DrawerHeader } from "../helper/drawerHeader";

const ContentArea = ({ open }) => {
  return (
    <Main open={open}>
      <DrawerHeader />
      <RoutesHandler />
    </Main>
  );
};

export default ContentArea;
