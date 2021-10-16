import FormUsers from "./formusers";
import ListUsers from "./listusers";
import { useState, useEffect } from "react";
import SectionTitle from "components/template-base/content/SectionTitle";
import CardHeader from "components/template-base/content/CardHeader";
import SectionHeader from "components/template-base/content/SectionHeader";
import { getUsersBackend } from "utils/api";


const AppUser = () => {
  const [viewTable, setWiewTable] = useState(true);
  const [textButton, setTextButton] = useState("Nuevo Usuario");
  const [usersDb, setUsersDb] = useState([]);
  const [runQuery, setRunQuery] = useState(true);
  const [title, setTitle] = useState("Módulo de Usuarios");
  const [subtitle, setSubTitle] = useState("Listado de Usuarios");
  const [subtitletag, setSubTitleTag] = useState("Busque, edite o elimine los registros");
  

  useEffect(() => {
    if(runQuery){
      getUsersBackend(
        (response)=> {
          setUsersDb(response.data);
        }, 
        (error)=> {
          console.error(error);
        }
        );
      setRunQuery(false);
    }
  }, [runQuery])

  useEffect(() => {
    if(viewTable){
      setRunQuery(true);
    };
  }, [viewTable]);

  useEffect(() => {
    if (viewTable) {
      setTextButton("Nuevo Usuario");
      setSubTitle("Listado de usuarios");
      setSubTitleTag("Busque, edite o elimine los registros")
    } else {
      setTextButton("Ver Todos");
      setSubTitle("Registro de usuarios");
      setSubTitleTag("Agregue nuevos usuarios")
    }
  }, [viewTable]);

  return (
    <>
      <SectionHeader title={title} subtitle={subtitle} />
      <SectionTitle  subtitle={subtitle} subtitletag={subtitletag}/>
      <div className="card">
        <CardHeader
          setWiewTable={setWiewTable}
          viewTable={viewTable}
          textButton={textButton}
        
        />
        <div className="card-body">
          {viewTable ? (
            <ListUsers usersDb={usersDb} setRunQuery={setRunQuery} />
          ) : (
            <FormUsers
              setWiewTable={setWiewTable}
              setUsersDb={setUsersDb}
              usersDb={usersDb}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AppUser;
