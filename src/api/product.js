import { apiInstance } from "./index.js";

const api = apiInstance();

const fetchCategories = (succuess, fail) => {
  api.get(`/categories`).then(succuess).then(fail);
};

const fetchAreaCodes = (succuess, fail) => {
  api.get(`/areacodes`).then(succuess).then(fail);
};

export { fetchCategories, fetchAreaCodes };
