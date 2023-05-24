import axios from "axios";

// local vue api axios instance
function apiInstance() {
  return axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
}

export { apiInstance };
