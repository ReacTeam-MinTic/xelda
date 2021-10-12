import FormUsers from "./formusers";
import ListUsers from "./listusers";
import { useState, useEffect } from "react";
import axios from "axios";
import SectionTitle from "components/template-base/content/SectionTitle";
import CardHeader from "components/template-base/content/CardHeader";
import SectionHeader from "components/template-base/content/SectionHeader";


const AppUser = () => {
  const [viewTable, setWiewTable] = useState(true);
  const [textButton, setTextButton] = useState("Nuevo Usuario");
  const [usersDb, setUsersDb] = useState([]);
  const [runQuery, setRunQuery] = useState(true);
  

  useEffect(() => {
    const getUsersBackend = async () => {
      const options = { method: "GET", url: "http://localhost:5000/users" };
      await axios
        .request(options)
        .then(function (response) {
          setUsersDb(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    if(runQuery){
      getUsersBackend();
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
