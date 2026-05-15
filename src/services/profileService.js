import axios from "axios";
import { getToken } from "../utils/token";

const API = process.env.REACT_APP_API_URL?.replace(/\/+$/, "") || "https://career-guidance-backend.onrender.com";

export const createProfile = async (profileData) => {
  const token = getToken();
  return axios.post(`${API}/api/profile/`, profileData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getProfile = async () => {
  const token = getToken();
  return axios.get(`${API}/profile/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateProfile = async (profileData) => {
  const token = getToken();
  return axios.put(`${API}/profile/`, profileData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
