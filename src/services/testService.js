import axios from "axios";
import { getToken } from "../utils/token";

const API = process.env.REACT_APP_API_URL?.replace(/\/+$/, "") || "https://career-guidance-backend.onrender.com";

export const getQuestions = async () => {
  const token = getToken();
  return axios.get(`${API}/api/questions/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const submitTest = async (answers) => {
  const token = getToken();
  return axios.post(`${API}/submit-test/`, answers, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

   