import { createContext } from "react";
import { useNavigate } from "react-router";
import { getCookie, removeCookie } from "@/utils";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const token = getCookie("token");
  const email = getCookie("email");

  const Logout = () => {
    removeCookie("token");
    removeCookie("email");
    return navigate("/");
  };

  return (
    <AuthContext.Provider value={{ token, email, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};
