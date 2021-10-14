import FormProducts from "./formproducts";
import ListProducts from "./listproducts";
import { useState, useEffect } from "react";
import SectionTitle from "components/template-base/content/SectionTitle";
import CardHeader from "components/template-base/content/CardHeader";
import SectionHeader from "components/template-base/content/SectionHeader";
import { getProductsBackend } from "utils/api";


const AppProducts = () => {
  const [viewTable, setWiewTable] = useState(true);
  const [textButton, setTextButton] = useState("Nuevo Producto");
  const [ProductsDb, setProductsDb] = useState([]);
  const [runQuery, setRunQuery] = useState(true);
  

  useEffect(() => {
    if(runQuery){
      getProductsBackend(setProductsDb, setRunQuery);
    }
  }, [runQuery])

  useEffect(() => {
    if(viewTable){
      setRunQuery(true);
    };
  }, [viewTable]);

  useEffect(() => {
    if (viewTable) {
      setTextButton("Nuevo Producto");
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
            <ListProducts productsDb={ProductsDb} setRunQuery={setRunQuery} />
          ) : (
            <FormProducts
              setWiewTable={setWiewTable}
              setProductsDb={setProductsDb}
              ProductsDb={ProductsDb}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AppProducts;