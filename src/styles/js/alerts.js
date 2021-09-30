import iziToast from "izitoast";

const alertSucees = () => {iziToast.show({
    title: '¡Guardado!', 
    message: 'Operación exitosa', 
    color: 'green', 
    position: 'topRight', 
    icon: 'far fa-check-circle'
  });
} 

export default alertSucees;