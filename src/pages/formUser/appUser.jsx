import FormUsers from "./formusers";
import Card from "components/Card";
import ListUsers from "./listusers";
import { useState, useEffect } from "react";
import axios from "axios";
import SectionTitle from "components/template-base/content/SectionTitle";
import CardHeader from "components/template-base/content/CardHeader";
import SectionHeader from "components/template-base/content/SectionHeader";

const AppUser = () => {
  const [viewTable, setWiewTable] = useState(true);
 
  return (
    <>
      <SectionHeader/>
      <SectionTitle />
      <div className="card">
        <CardHeader />
        <div className="card-body">
          {viewTable ? <ListUsers /> : <FormUsers />}
        </div>
      </div>
    </>
  );
};

export default AppUser;
