import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081",
  withCredentials: false,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export default api;
