import axios from 'axios';

export const obtenerVentas = async (setVentas, setEjecutarConsulta) => {
  const options = { method: 'GET', url: 'https://localhost:5000/formventas/ventas' };
  await axios
    .request(options)
    .then(function (response) {
      setVentas(response.data);
      console.log("ventas",response.data)
    })
    .catch(function (error) {
      console.error(error);
    });
  setEjecutarConsulta(false);
};
