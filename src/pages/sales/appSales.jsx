import FormSales from "./formsales";
import ListSales from "./listusales";
import { useState, useEffect } from "react";
import SectionTitle from "components/content/SectionTitle";
import CardHeader from "components/content/CardHeader";
import SectionHeader from "components/content/SectionHeader";
import { getProductsBackend, getSeller_, getSalesBackend} from "utils/api";


const AppSale = () => {
  const [viewTable, setWiewTable] = useState(true);
  const [textButton, setTextButton] = useState("Nueva Venta");
  const [salesDb, setSalesDb] = useState([]);
  const [runQuery, setRunQuery] = useState(true);
  const [title, setTitle] = useState("Módulo de ventas");
  const [subtitle, setSubTitle] = useState("Listado de Ventas");
  const [subtitletag, setSubTitleTag] = useState("Busque, edite o elimine los registros");
  const [seller, setSeller] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsRow, setproductsRow] = useState();
  

  useEffect(()=>{
    const getSeller = async () => {
      await getSeller_(
        (response)=>{
          setSeller(response.data)
        }, 
        (error)=>{console.error("Ha ocurrido un error: ", error)});
    };

    const getProducts = async () => {
      await getProductsBackend(
        (response)=>{
          console.log("response.data____________" , response.data)
          setProducts(response.data)
        }, 
        (error)=>{console.error("Ha ocurrido un error: ", error)}
        );
    };
    getSeller();
    getProducts();

  },[]);
  
  

  useEffect(() => {
    const fecthSales = async () => {
      await getSalesBackend(
        (response)=> {
          setSalesDb(response.data);
          setRunQuery(false);
        }, 
        (error)=> {
          console.error("Ha ocurrido un error: ", error);
        }
        );
    }
    if(runQuery){
      fecthSales();
    }
  }, [runQuery])

  useEffect(() => {
    if(viewTable){
      setRunQuery(true);
    };
  }, [viewTable]);

  useEffect(() => {
    if (viewTable) {
      setTextButton("Nueva venta");
      setSubTitle("Listado de ventas");
      setSubTitleTag("Busque, edite o elimine los registros")
    } else {
      setTextButton("Ver Todo");
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
              seller={seller}
              products={products}
              setProducts={setProducts}
              setproductsRow={setproductsRow}
              productsRow={productsRow}
              
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AppSale;
