//auth context
import { useAuthContext } from "../context/authContext";
//react router
import { Route, Routes } from "react-router-dom";
//routes components
import { ROUTES_MAP } from "./routes";
//no auth
import Signin from "../pages/no-auth/signin";
import Signup from "../pages/no-auth/signup";

const RoutesHandler = () => {
  const { auth, routes } = useAuthContext();
  //creacion de rutas para el usuario a partir de JSON de roles
  const user_routes = routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      element={ROUTES_MAP[route.component]}
    />
  ));

  //apartado de rutas para usuario no autenticado
  const noAuthroutes = (
    <>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </>
  );

  //apartado de rutas para usuario autenticado
  const authRoutes = user_routes ? user_routes : null;

  return (
    <Routes>
      <Route path="/" element={<div>Home page</div>} />
      <Route path="*" element={<div>404 not found</div>} />
      {!auth ? noAuthroutes : authRoutes}
    </Routes>
  );
};

export default RoutesHandler;
