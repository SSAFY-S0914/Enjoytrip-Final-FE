import { apiInstance } from "./index.js";

const api = apiInstance();

const fetchCategories = (succuess, fail) => {
  api.get(`/categories`).then(succuess).catch(fail);
};

const fetchAreaCodes = (succuess, fail) => {
  api.get(`/areacodes`).then(succuess).catch(fail);
};

const fetchProductByKeyword = (param, succuess, fail) => {
  api.get(`/product/search/keyword`, { params: param }).then(succuess).catch(fail);
};

const fetchProductByFestival = (param, succuess, fail) => {
  api.get(`/product/search/festival`, { params: param }).then(succuess).catch(fail);
};

const fetchProductByStay = (param, succuess, fail) => {
  api.get(`/product/search/stay`, { params: param }).then(succuess).catch(fail);
};

const fetchProductDetail = (param, succuess, fail) => {
  api.get(`/product/search/detail`, { params: param }).then(succuess).catch(fail);
};

export {
  fetchCategories,
  fetchAreaCodes,
  fetchProductByKeyword,
  fetchProductByFestival,
  fetchProductByStay,
  fetchProductDetail,
};
