import Card from "components/Card";
import RegistrarVenta from "components/RegistrarVenta";

const Ventas = () => {
  return (
    <>
      <Card
        titulo="Ventas"
        subtitulo="Módulo de ventas"
        tituloCardHeader="Registrar ventas"
        boton="Nueva venta"
        ruta1="Inicio"
        ruta2="Ventas"
        ruta3="Registrar venta"
        icon="far fa-user"
        rutaheadercard="/listventas"
      >
        <RegistrarVenta />
      </Card>
    </>
  );
};

export default Ventas;
