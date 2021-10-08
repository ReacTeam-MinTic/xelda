import Card from "components/Card";
import RegistrarVenta from 'components/RegistrarVenta';

const Ventas = () => {  
    return (
        <>
            <Card titulo="Ventas" subtitulo="Módulo de ventas" tituloCardHeader="Registrar ventas" boton="Listado de ventas" rutaBoton="/listventas" ruta1="Inicio" ruta2="Ventas" ruta3="Registrar venta" icon="far fa-user">
                <RegistrarVenta /> 
            </Card>
        </>
    )
}

export default Ventas
