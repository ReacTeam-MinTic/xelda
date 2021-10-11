import FormUsers from "./formusers";
import ListUsers from "./listusers";
import { useState, useEffect } from "react";
import axios from "axios";
import SectionTitle from "components/template-base/content/SectionTitle";
import CardHeader from "components/template-base/content/CardHeader";
import SectionHeader from "components/template-base/content/SectionHeader";
import usuarios from "listadoUsuarios";

const AppUser = () => {
  const [viewTable, setWiewTable] = useState(true);
  const [textButton, setTextButton,] = useState("Nuevo Usuario");

  useEffect(()=>{
    if(viewTable){
      setTextButton("Nuevo Usuario")
    }else{
      setTextButton("Ver Todos")
    }
  }, [viewTable]);

  return (
    <>
      <SectionHeader/>
      <SectionTitle />
      <div className="card">
        <CardHeader setWiewTable={setWiewTable} viewTable={viewTable} textButton={textButton} />
        <div className="card-body">
          {viewTable ? <ListUsers usuarios={usuarios} /> : <FormUsers />}
        </div>
      </div>
    </>
  );
};

export default AppUser;
