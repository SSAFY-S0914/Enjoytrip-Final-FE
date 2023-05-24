import { apiInstance } from "./index.js";

const api = apiInstance();

const fetchCategories = (succuess, fail) => {
  api.get(`/categories`).then(succuess).then(fail);
};
