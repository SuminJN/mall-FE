import axios from "axios";
import jwtAxios from "../util/jwtUtil";

export const API_SERVER_HOST = process.env.REACT_APP_API_SERVER_HOST;

const prefix = `${API_SERVER_HOST}/api/todo`;

export const getOne = async (tno) => {
  const res = await jwtAxios.get(`${prefix}/${tno}`);

  return res.data;
};

export const getList = async (pageParams) => {
  const { page, size } = pageParams;

  const res = await jwtAxios.get(`${prefix}/list`, { params: { page: page, size: size } });

  return res.data;
};

export const postAdd = async (todoObj) => {
  const res = await jwtAxios.post(`${prefix}/`, todoObj);

  return res.data;
};

export const deleteOne = async (tno) => {
  const res = await jwtAxios.delete(`${prefix}/${tno}`);

  return res.data;
};

export const putOne = async (todo) => {
  const res = await jwtAxios.put(`${prefix}/${todo.tno}`, todo);

  return res.data;
};
