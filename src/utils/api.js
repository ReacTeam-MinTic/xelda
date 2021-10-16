import axios from "axios";

//Módulo de usuarios
export const getUsersBackend = async (successCallback, errorCallback) => {
  const options = { method: "GET", url: "http://localhost:5000/users" };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const postUsers = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: "http://localhost:5000/users",
    headers: { "Content-Type": "application/json" },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editUsers = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/users/${id}`,
    headers: {'Content-Type': 'application/json'},
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//Módulo de Productos
export const getProductsBackend = async (successCallback, errorCallback) => {
  const options = { method: "GET", url: "http://localhost:5000/products" };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const postProducts = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: "http://localhost:5000/products",
    headers: { "Content-Type": "application/json" },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//Módulo de Ventas
export const getSalesBackend = async (successCallback, errorCallback) => {
  const options = { method: "GET", url: "http://localhost:5000/sales" };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const postSales = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: "http://localhost:5000/sales",
    headers: { "Content-Type": "application/json" },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
