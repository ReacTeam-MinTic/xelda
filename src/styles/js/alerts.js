import iziToast from "izitoast";

const alertSucees = () => {
  iziToast.show({
    title: "¡Guardado!",
    message: "Operación exitosa",
    color: "green",
    position: "topRight",
    icon: "far fa-check-circle",
  });
};

const alertError = () => {
  iziToast.show({
    title: "¡ATENCiÓN!",
    message: "Ha ocurrido un error",
    color: "red",
    position: "topRight",
    icon: "far fa-check-circle",
  });
};

const alertWarning = () => {
  iziToast.show({
    title: "¡Cuidado!",
    message: "¿Está a punto de elimanar el siguiente registro: ",
    color: "red",
    position: 'topRight',
    icon: "far fa-check-circle",
    timeout: 0,
    buttons: [
      [
        "<button>OK</button>",
        function (instance, toast) {
          alert("Hello world!");
          instance.hide(
            {
              transitionOut: "fadeOutUp",
              onClosing: function (instance, toast, closedBy) {
                console.info("closedBy: " + closedBy); // The return will be: 'closedBy: buttonName'
              },
            },
            toast,
            "buttonName"
          );
          
        },
        true,
      ], // true to focus
      [
        "<button>Cancelar</button>",
        function (instance, toast) {
          instance.hide(
            {
              transitionOut: "fadeOutUp",
              onClosing: function (instance, toast, closedBy) {
                console.info("closedBy: " + closedBy); // The return will be: 'closedBy: buttonName'
              },
            },
            toast,
            "buttonName"
          );
        },
      ],
    ],
    
  });
};

const Alerts = {
  "alertSucees":alertSucees, 
  "alertWarning":alertWarning, 
  "alertError": alertError
};

export default Alerts;
