import axios from "axios";

const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`
}

//Ruta dummy para identificar los datos del usuario 
export const getDataUser = async (setUsersDb, setRunQuery) => {
  const options = {
    method: "GET",
    url: "http://localhost:5000/users/self",
    headers: {
      Authorization: getToken() //Ponerle Authorization: getToken() en el header de cada petición
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
      Authorization: getToken() //Ponerle Authorization: getToken() en el header de cada petición
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
      Authorization: getToken() //Ponerle Authorization: getToken() en el header de cada petición
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
      Authorization: getToken() //Ponerle Authorization: getToken() en el header de cada petición
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

 
