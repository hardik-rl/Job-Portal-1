/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookies from "js-cookie";
import { ADMIN, TOKEN, USER } from "./constant";
import { InternalAxiosRequestConfig } from "axios";

const getItemFromCookie = (key: string) => Cookies.get(key);

const setItemInCookie = (key: string, value: string) => Cookies.set(key, value);

const removeItemInCookie = (key: string) => Cookies.remove(key);

const getToken = () => {
  return Cookies.get(TOKEN);
};

const setToken = (token: string) => {
  return Cookies.set(TOKEN, token);
};

const removeToken = () => {
  return Cookies.remove(TOKEN);
};

const getUserRoleFromUrl = () => {
  const path = window.location.pathname;
  if (path.includes("admin")) {
    return ADMIN;
  }
  return USER;
};

export function getRandomHexColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const rHex = r.toString(16).padStart(2, '0');
  const gHex = g.toString(16).padStart(2, '0');
  const bHex = b.toString(16).padStart(2, '0');

  const hexColor = `#${rHex}${gHex}${bHex}`;
  return hexColor;
}

const getPrefixPathFromUserRole = () => {
  const userRole = getUserRoleFromUrl();
  const prefixPath = userRole === ADMIN ? "/admin" : "";
  return prefixPath;
};

const clientConfig = (config: InternalAxiosRequestConfig) => {
  const token = getItemFromCookie(TOKEN);

  const userRole = getUserRoleFromUrl();

  if (token) {
    config.headers = config.headers ?? {};
    config.headers[`Authorization`] = "Bearer " + token;
  }

  if (!config.url?.includes("user")) {
    config.url = `${userRole}${config.url}`;
  }

  return config;
};

const handleAxiosError = () => {
  removeItemInCookie(TOKEN);
  const prefixPath = getPrefixPathFromUserRole();
  window.location.replace(`${prefixPath}/login`);
};

function formatDate(dateString: string) {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

export {
  getItemFromCookie,
  setItemInCookie,
  removeItemInCookie,
  getToken,
  setToken,
  removeToken,
  getUserRoleFromUrl,
  getPrefixPathFromUserRole,
  clientConfig,
  handleAxiosError,
  formatDate,
};

export const pageRowOptions = [
  { value: 10, label: "10" },
  { value: 20, label: "20" },
  { value: 50, label: "50" },
  { value: 100, label: "100" },
];

export const dropDownArrowStyle = {
  dropdownIndicator: (
    base: any,
    state: { selectProps: { menuIsOpen: any } }
  ) => ({
    ...base,
    transition: "all .2s ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
  }),
};

export const formatSize = (size: number) => {
  if (size < 1024) {
    return `${size} B`;
  } else if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(2)} KB`;
  } else {
    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  }
};

export const specificColumnIDs = [
  "name",
  "email",
  "isActive",
  "isSignedUp",
  "user",
  "createdAt",
];
