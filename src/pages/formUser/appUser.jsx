import FormUsers from "./formusers";
import Card from "components/Card";
import ListUsers from "./listusers";
import { useState, useEffect } from "react";
import axios from "axios";
import SectionBody from "components/SectionBody";

const AppUser = () => {
  const [viewTable, setWiewTable] = useState(true);
  //const [textButton, setTextButton] = useState("Nuevo Usuario");
  //const [user, setListUser] = useState([]);

  // useEffect(() => {
  //   if (viewTable) {
  //   } else {
  //     setTextButton("Ver Todos");
  //   }
  // }, [viewTable]);

  return (
    <>
    {/* <Card
      titulo="Módulo de Usuarios"
      subtitulo="Listado de usuarios"
      ruta1="Inicio"
      ruta2="Usuarios"
      ruta3="Lista de usuarios"
      boton="Nuevo Usuario"
      icon="far fa-user"
      rutaheadercard="/formusers"
      setWiewTable = {setWiewTable}
      viewTable = {viewTable} 
    > */}
   
      {viewTable ? (
        <ListUsers />
      ) : (
        <FormUsers />
      )}
      {/* </Card> */}
     
    </>
  );
};

export default AppUser;
