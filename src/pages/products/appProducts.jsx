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
  const [title, setTitle] = useState("Módulo de Productos");
  const [subtitle, setSubTitle] = useState("Listado de Productos");
  const [subtitletag, setSubTitleTag] = useState(
    "Busque, edite o elimine los registros"
  );

  useEffect(() => {
    const fecthProducts = async () => {
      getProductsBackend(
        (response) => {
          setProductsDb(response.data);
          setRunQuery(false);
        },
        (error) => {
          console.error(error);
        }
      );
    };

    if (runQuery) {
      fecthProducts();
    }
  }, [runQuery]);

  useEffect(() => {
    if (viewTable) {
      setRunQuery(true);
    }
  }, [viewTable]);

  useEffect(() => {
    if (viewTable) {
      setTextButton("Nuevo Producto");
      setSubTitle("Listado de productos");
      setSubTitleTag("Busque, edite o elimine los registros");
    } else {
      setTextButton("Ver Todo");
      setSubTitle("Registro de productos");
      setSubTitleTag("Agregue nuevos productos");
    }
  }, [viewTable]);

  return (
    <>
      <SectionHeader title={title} subtitle={subtitle} />
      <SectionTitle subtitle={subtitle} subtitletag={subtitletag} />
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