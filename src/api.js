import axios from "axios";

const api = axios.create({
  baseURL: "https://jobmate-backend-jkx3.onrender.com/api",
});

export default api;