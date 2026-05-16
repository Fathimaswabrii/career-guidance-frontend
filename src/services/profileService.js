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

export const createProfile = async (profileData) => {
  return axios.post(`${API}/api/profile/`, profileData, {
    headers: authHeaders(),
  });
};

export const getProfile = async () => {
  return axios.get(`${API}/api/profile/`, {
    headers: authHeaders(),
  });
};

export const updateProfile = async (profileData) => {
  return axios.put(`${API}/api/profile/`, profileData, {
    headers: authHeaders(),
  });
};
