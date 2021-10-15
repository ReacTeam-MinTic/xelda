import FormSales from "./formsales";
import ListSales from "./listusales";
import { useState, useEffect } from "react";
import SectionTitle from "components/template-base/content/SectionTitle";
import CardHeader from "components/template-base/content/CardHeader";
import SectionHeader from "components/template-base/content/SectionHeader";
import { getSalesBackend } from "utils/api";


const AppSale = () => {
  const [viewTable, setWiewTable] = useState(true);
  const [textButton, setTextButton] = useState("Nuevo Usuario");
  const [salesDb, setSalesDb] = useState([]);
  const [runQuery, setRunQuery] = useState(true);
  const [title, setTitle] = useState("Módulo de ventas");
  const [subtitle, setSubTitle] = useState("Listado de Ventas");
  const [subtitletag, setSubTitleTag] = useState("Busque, edite o elimine los registros");
  
  

  useEffect(() => {
    if(runQuery){
      getSalesBackend(setSalesDb, setRunQuery);
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
      setSubTitle("Listado de ventas");
      setSubTitleTag("Busque, edite o elimine los registros")
    } else {
      setTextButton("Ver Todos");
      setSubTitle("Registro de ventas");
      setSubTitleTag("Agregue nuevas ventas")
    }
  }, [viewTable]);

  return (
    <>
      <SectionHeader title={title} subtitle={subtitle}  />
      <SectionTitle subtitle={subtitle} subtitletag={subtitletag} />
      <div className="card">
        <CardHeader
          setWiewTable={setWiewTable}
          viewTable={viewTable}
          textButton={textButton}
        
        />
        <div className="card-body">
          {viewTable ? (
            <ListSales salesDb={salesDb} setRunQuery={setRunQuery} />
          ) : (
            <FormSales
              setWiewTable={setWiewTable}
              setSalesDb={setSalesDb}
              salesDb={salesDb}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AppSale;
