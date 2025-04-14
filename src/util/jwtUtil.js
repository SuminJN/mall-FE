import axios from "axios";

const jwtAxios = axios.create();

// before request
const beforeReq = (config) => {
  console.log("before request...........");
  return config;
};

// fail request
const requestFail = (error) => {
  console.log("request fail...........");
  return Promise.reject(error);
};

// before return response
const beforeRes = (response) => {
  console.log("before return response...........");
  return response;
};

// fail response
const responseFail = (error) => {
  console.log("response fail...........");
  return Promise.reject(error);
};

jwtAxios.interceptors.request.use(beforeReq, requestFail);
jwtAxios.interceptors.response.use(beforeRes, responseFail);

export default jwtAxios;
