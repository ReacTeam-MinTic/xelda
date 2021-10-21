import axios from "axios";

//Módulo de usuarios

const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`
}

export const getUsersBackend = async (successCallback, errorCallback) => {
  const options = { method: "GET", url: "http://localhost:5000/users/",
  headers: {
    Authorization: getToken(),
  },
};
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerDatosUsuario = async (setUsersDb, setRunQuery) => {
  const options = {
    method: "GET",
    url: "http://localhost:5000/users/self",
    headers: {
      Authorization: getToken()
    }
  };
  await axios
    .request(options)
    .then(function (response) {
      setUsersDb(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  setRunQuery(false);
};

export const postUsers = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: "http://localhost:5000/users/",
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editUsers = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: "PATCH",
    url: `http://localhost:5000/users/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const deleteUsers_ = async (id, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: `http://localhost:5000/users/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const getSeller_ = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `http://localhost:5000/users/`,
    header: {
      Authorization: getToken()
    }
  }
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const getUserLogin = async (successCallback, errorCallback) => {
  const options = { method: "GET", url: "http://localhost:5000/users/self/",
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
    url: "http://localhost:5000/products/",
    headers: {
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const postProducts = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: "http://localhost:5000/products/",
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editProducts = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: "PATCH",
    url: `http://localhost:5000/products/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const deleteProducts_ = async (id, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: `http://localhost:5000/products/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//Módulo de Ventas
export const getSalesBackend = async (successCallback, errorCallback) => {
  const options = { 
    method: "GET", 
    url: "http://localhost:5000/sales/", 
  headers: {
    Authorization: getToken(),
  },
 };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const postSales = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: "http://localhost:5000/sales/",
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editSales = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: "PATCH",
    url: `http://localhost:5000/sales/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const deleteSales_ = async (id, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: `http://localhost:5000/sales/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
