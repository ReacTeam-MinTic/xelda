import React from 'react';
import "pages/practicasReact/styles.css";
import Boton from './componentes/Boton';
import CuandroUno from './componentes/CuandroUno';
import CuadroDos from './componentes/CuadroDos';
import { useState, useEffect } from 'react';
import Inputs from './componentes/Inputs';


const SegundaApp = () => {
    const [valorBoton, setValorBoton] = useState(true);
    const [valorTexto, setValorTexto] = useState("cuadro verde")

    useEffect( () => {
        if(valorBoton){
            setValorTexto("cuadro verde");
        }else{
            setValorTexto("cuadro morado");
        }
    }, [valorBoton]);

    return (
        <div>
            {valorBoton ?  <CuandroUno />: <CuadroDos /> }
            <Inputs></Inputs>
            <Boton change={() => {setValorBoton(!valorBoton);}}  variable={valorTexto}/>
        </div>
    )
}
//
export default SegundaApp;
