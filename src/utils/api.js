import axios from "axios";
const getUsersBackend = async (setUsersDb, setRunQuery) => {
  const options = { method: "GET", url: "http://localhost:5000/users" };
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

const getProductsBackend = async (setProductsDb, setRunQuery) => {
  const options = { method: "GET", url: "http://localhost:5000/products" };
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

const getSalesBackend = async (setSalesDb, setRunQuery) => {
  const options = { method: "GET", url: "http://localhost:5000/sales" };
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

export { getUsersBackend, getProductsBackend, getSalesBackend };
