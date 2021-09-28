import LayoutsCard from "layouts/layouts-card";
import RegistrarVenta from 'components/RegistrarVenta';

const Ventas = () => {  
    return (
        <>
            <LayoutsCard titulo="Ventas" subtitulo="Módulo de ventas" tituloCardHeader="Registrar ventas" nombreBoton="+ Nueva venta">
                <RegistrarVenta/> 
            </LayoutsCard>
        </>
    )
}

export default Ventas
