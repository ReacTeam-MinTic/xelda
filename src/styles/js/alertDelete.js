import iziToast from "izitoast";

const alertDelete = () => {iziToast.show({
    title: '¡Eliminado!', 
    message: 'El formulario ha sido eliminado', 
    color: 'red', 
    position: 'topRight', 
    icon: 'far fa-check-circle'
  });
} 

export default alertDelete;