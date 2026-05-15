import axios from "axios";
import { getToken } from "../utils/token";

const API = process.env.REACT_APP_API_URL?.replace(/\/+$/, "") || "https://career-guidance-backend.onrender.com";

export const getResult = async () => {
  const token = getToken();
  return axios.get(`${API}/api/results/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getSkills = async (resultData) => {
  const token = getToken();
  return axios.post(`${API}/skill-recommend/`, resultData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getCourses = async (career) => {
  const token = getToken();
  return axios.post(`${API}/courses/`, { career }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getStreams = async (resultData) => {
  const token = getToken();
  return axios.post(`${API}/stream/`, { career: resultData.career }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
