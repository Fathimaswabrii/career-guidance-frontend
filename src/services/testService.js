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

export const getQuestions = async () => {
  return axios.get(`${API}/api/questions/`, {
    headers: authHeaders(),
  });
};

export const submitTest = async (answers) => {
  return axios.post(`${API}/api/submit-test/`, answers, {
    headers: authHeaders(),
  });
};

   