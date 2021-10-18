import axios from "axios";

const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`
}

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

export const getUsersBackend = async (setUsersDb, setRunQuery) => {
  const options = {
    method: "GET", 
    url: "http://localhost:5000/users",
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

export const getProductsBackend = async (setProductsDb, setRunQuery) => {
  const options = {
    method: "GET", url: "http://localhost:5000/products",
    headers: {
      Authorization: getToken() 
    }
  };
  await axios
    .request(options)
    .then(function (response) {
      setProductsDb(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  setRunQuery(false);
};

export const getSalesBackend = async (setSalesDb, setRunQuery) => {
  const options = {
    method: "GET", url: "http://localhost:5000/sales",
    headers: {
      Authorization: getToken() 
    }
  };
  await axios
    .request(options)
    .then(function (response) {
      setSalesDb(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  setRunQuery(false);
};

 
