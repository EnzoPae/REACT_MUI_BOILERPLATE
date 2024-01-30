import { routesAdmin } from "./routesAdmin";
import { routesUser } from "./routesUser";

export const dictionaryRoutes = (role) => {
  if (typeof role !== "string") return [];

  const ROUTES = {
    user: routesUser,
    admin: routesAdmin,
  };
  
  const userRoutes = ROUTES[role] ? ROUTES[role] : [];

  return userRoutes;
};
