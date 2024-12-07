import { getCookie } from "@/utils";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export const useProtectedRoute = () => {
  const navigete = useNavigate();

  const token = getCookie("token");

  useEffect(() => {
    if (!token) {
      return navigete("/");
    }
  }, []);
};
