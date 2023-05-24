import axios from "axios";

// local vue api axios instance
function apiInstance() {
  return axios.create({
    baseURL: "http://localhost:8080",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
}

export { apiInstance };
