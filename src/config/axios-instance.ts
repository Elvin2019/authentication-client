import axios, { AxiosHeaders } from "axios";
import { localStorageData } from "./storage";
import { Auth } from "../models/auth.model";

export const loadAuth = () =>
  localStorageData.loadData<Auth>("auth", {
    token: null,
  });

const getHeader = () => {
  const auth = loadAuth();
  return {
      Authorization: `Bearer ${auth.token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
  } as unknown as AxiosHeaders;
};

const baseURL = 'http://localhost:4001';
const axiosInstance = axios.create();
axiosInstance.defaults.headers.common = getHeader();
axiosInstance.defaults.baseURL = baseURL;

axiosInstance.interceptors.request.use(
  function (config) {
    config.baseURL = baseURL;
    config.headers = getHeader();
    return config;
  },
  function (error) {
    Promise.reject(error);
  }
);

export default axiosInstance;
