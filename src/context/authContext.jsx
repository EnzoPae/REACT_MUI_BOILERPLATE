import { createContext, useContext, useEffect } from "react";
//hook
import { useAuth } from "../hooks/useAuth";

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const { auth, user, routes, login, logout } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("token");
    token ? login() : logout();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        user,
        routes,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
