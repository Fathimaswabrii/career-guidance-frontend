import axios from "axios";

const API_BASE = process.env.REACT_APP_API_URL?.replace(/\/+$/, "") || "https://career-guidance-backend.onrender.com";
const API = axios.create({
  baseURL: `${API_BASE}/api/`
});

// REGISTER
export const registerUser = (data) => {
  return API.post("register/", data);
};

// LOGIN
export const loginUser = (data) => {
  return API.post("login/", data);
};