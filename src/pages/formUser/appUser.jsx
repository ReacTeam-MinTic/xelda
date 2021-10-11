import FormUsers from "./formusers";
import ListUsers from "./listusers";
import { useState, useEffect } from "react";
import axios from "axios";
import SectionTitle from "components/template-base/content/SectionTitle";
import CardHeader from "components/template-base/content/CardHeader";
import SectionHeader from "components/template-base/content/SectionHeader";

const AppUser = () => {
  const [viewTable, setWiewTable] = useState(true);
  const [textButton, setTextButton,] = useState("Nuevo Usuario");
  let [usersDb, setUsersDb] = useState([]);

 

  useEffect(()=>{
    
    if(viewTable){
      setTextButton("Nuevo Usuario")
    }else{
      setTextButton("Ver Todos")
    }
  }, [viewTable]);

  const objetenerUsers = async () => {
    await axios({
      method: 'GET',
      url: 'http://localhost:5000/users'
    }).then(res =>{
      usersDb = usersDb.concat(res.data);
      setUsersDb(usersDb);
    }).catch(function (error) {
      console.error(error);
    }); 
  }

  useEffect(()=>{ 
    let contador = 1;
    if(contador===1){
      objetenerUsers();
      contador = 2;
    }else{
      contador = 1;
    }
  }, []);

  return (
    <>
      <SectionHeader/>
      <SectionTitle />
      <div className="card">
        <CardHeader setWiewTable={setWiewTable} viewTable={viewTable} textButton={textButton} />
        <div className="card-body">
          {viewTable ? <ListUsers usersDb={usersDb} /> : <FormUsers />}
        </div>
      </div>
    </>
  );
};

export default AppUser;
