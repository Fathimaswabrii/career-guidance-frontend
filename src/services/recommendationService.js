import axios from "axios";
import { getToken } from "../utils/token";

const API = process.env.REACT_APP_API_URL?.replace(/\/+$/, "") || "https://career-guidance-backend.onrender.com";

const authHeaders = () => {
  const token = getToken();
  if (!token) {
    throw new Error("Authentication token missing");
  }
  return {
    Authorization: `Bearer ${token}`,
  };
};

export const getResult = async () => {
  return axios.get(`${API}/api/results/`, {
    headers: authHeaders(),
  });
};

export const getSkills = async (resultData) => {
  return axios.post(`${API}/api/skill-recommend/`, resultData, {
    headers: authHeaders(),
  });
};

export const getCourses = async (career) => {
  return axios.post(`${API}/api/courses/`, { career }, {
    headers: authHeaders(),
  });
};

export const getStreams = async (resultData) => {
  return axios.post(`${API}/api/stream/`, { career: resultData.career }, {
    headers: authHeaders(),
  });
};
