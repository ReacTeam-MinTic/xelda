import React from 'react'
import LayoutsCard from "layouts/layouts-card";
import RegistrarVenta from 'components/RegistrarVenta';

const Ventas = () => {  
    return (
        <>
            <LayoutsCard titulo="Ventas" subtitulo="Registrar ventas">
                <RegistrarVenta/>
            </LayoutsCard>
        </>
    )
}

export default Ventas
