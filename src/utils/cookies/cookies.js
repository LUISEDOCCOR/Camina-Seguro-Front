import Cookies from "universal-cookie";

export const getCookie = (name) => {
  const cookies = new Cookies();
  return cookies.get(name);
};

export const setCookie = ({ key, value, days }) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);
  const cookies = new Cookies();
  cookies.set(key, value, {
    path: "/",
    expirationDate: expirationDate,
  });
};

export const removeCookie = (name) => {
  const cookies = new Cookies();
  cookies.remove(name, { path: "/" });
};
