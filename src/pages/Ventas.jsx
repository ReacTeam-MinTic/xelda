import Card from "components/Card";
import RegistrarVenta from 'components/RegistrarVenta';

const Ventas = () => {  
    return (
        <>
            <Card titulo="Ventas" subtitulo="Módulo de ventas" tituloCardHeader="Registrar ventas" boton="Nueva venta">
                <RegistrarVenta/> 
            </Card>
        </>
    )
}

export default Ventas
