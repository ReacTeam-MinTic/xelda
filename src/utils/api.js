import axios from "axios";

/* const baseURL = "https://floating-oasis-22135.herokuapp.com" */


//Módulo de usuarios

const getToken = () => {
  return `Bearer ${localStorage.getItem('Token')}`
}

export const getUsersBackend = async (successCallback, errorCallback) => {
  const options = { method: "GET", url: "https://floating-oasis-22135.herokuapp.com/users/",
  headers: {
    Authorization: getToken(),
  },
};
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const getUserLogin = async (successCallback, errorCallback) => {
  const options = { method: "GET",
   url: "https://floating-oasis-22135.herokuapp.com/users/self/",
   headers: {
    Authorization: getToken(),
    }
  }
  await axios.request(options).then(successCallback).catch(errorCallback);
}

export const postUsers = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: "https://floating-oasis-22135.herokuapp.com/users/",
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editUsers = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: "PATCH",
    url: `https://floating-oasis-22135.herokuapp.com/users/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const deleteUsers_ = async (id, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: `https://floating-oasis-22135.herokuapp.com/users/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const getSeller_ = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `https://floating-oasis-22135.herokuapp.com/users/`,
    headers: {
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//Módulo de Productos
export const getProductsBackend = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: "https://floating-oasis-22135.herokuapp.com/products/",
    headers: {
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const postProducts = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: "https://floating-oasis-22135.herokuapp.com/products/",
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editProducts = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: "PATCH",
    url: `https://floating-oasis-22135.herokuapp.com/products/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const deleteProducts_ = async (id, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: `https://floating-oasis-22135.herokuapp.com/products/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//Módulo de Ventas
export const getSalesBackend = async (successCallback, errorCallback) => {
  const options = { 
    method: "GET", 
    url: "https://floating-oasis-22135.herokuapp.com/sales/", 
  headers: {
    Authorization: getToken(),
  },
 };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const postSales = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: "https://floating-oasis-22135.herokuapp.com/sales/",
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editSales = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: "PATCH",
    url: `https://floating-oasis-22135.herokuapp.com/sales/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const deleteSales_ = async (id, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: `https://floating-oasis-22135.herokuapp.com/sales/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
