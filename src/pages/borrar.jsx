import Card from "components/Card";
import React, { useState, useEffect } from "react";
import FormUsers from "./formusers";
import ListUsers from "./listusers";
import listUsers from "datesLists";

const AdminUser = () => {
  const [mostrarDatos, setMostrarDatos] = useState(true);
  const [txtBoton, setTxtBoton]= useState("Nuevo Usuario");
  
  useEffect(() => {
    if(mostrarDatos){
      setTxtBoton("Nuevo Usuario");
    } else{
      setTxtBoton("Listado de Usuarios"); 
    }
  }, [mostrarDatos]);
  

  return (
    <>
    <Card titulo="Módulo de Usuarios" subtitulo="Listado de usuarios" ruta1="Inicio" ruta2="Usuarios" ruta3="Lista de usuarios"  icon="far fa-user" fun={() => {setMostrarDatos(!mostrarDatos);}} boton={txtBoton}>
    {mostrarDatos ? <ListUsers lista={listUsers} /> : <FormUsers/>}
    </Card>
    </>
  );
};

export default AdminUser;
