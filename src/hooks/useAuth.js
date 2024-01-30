import { useState } from "react";
//react router
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
//rutas asignadas al rol del usuario
import { dictionaryRoutes } from "../routes/roles/dictionaryRoles";

export const useAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [auth, setAuth] = useState(null);
  const [user, setUser] = useState({});
  const [routes, setRoutes] = useState([]);

  //funcion que analiza si la ruta actual pertenece a alguna de las rutas noAuth
  const noAuthPaths = (p) => {
    const paths = ["/signin", "/signup"];
    return paths.includes(p);
  };

  const logout = () => {
    localStorage.removeItem("token");
    const currentNoAuthPath = noAuthPaths(location.pathname);
    //Si ruta actual no pertence a las rutas noAuth navega al inicio de sesion
    !currentNoAuthPath ? navigate("/signin") : null;
    setAuth(false);
    setUser(null);
    setRoutes([]);
  };

  const login = () => {
    const token = "Los días más felices siempre fueron, son y serán peronistas";
    localStorage.setItem("token", token);
    setUser({
      name: "jd peron",
      role: "admin",
    });
    const userRoutes = dictionaryRoutes("admin");
    setRoutes(userRoutes);
    setAuth(true);
    if (location.pathname === "/signin") {
      navigate("/");
    }
  };

  return { auth, user, routes, logout, login };
};
