import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/vnd.github.v3+json",
  },
});

export default api;
