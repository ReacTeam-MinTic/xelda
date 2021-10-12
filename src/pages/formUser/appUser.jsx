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
  

  useEffect(() => {
    if(runQuery){
      getUsersBackend(setUsersDb, setRunQuery);
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
    } else {
      setTextButton("Ver Todos");
    }
  }, [viewTable]);

  return (
    <>
     
      <SectionHeader />
      <SectionTitle />
       
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
