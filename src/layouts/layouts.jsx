import Footer from "components/Footer";
import MainSidebar from "components/MainSidebar";
import NavBar from "components/NavBar";
import { useAuth0 } from "@auth0/auth0-react";
import { useUser } from "context/userContext";
import { useEffect, useState } from "react";
import { getUserLogin } from "utils/api";
import ReactLoading from "react-loading"


const Layouts = ({ children }) => {

  const {loginWithRedirect, isAuthenticated,isLoading, getAccessTokenSilently, logout} = useAuth0();
  const [loadingUserInformaction, setLoadingUserInformaction]=useState(false);
  const {setUserData} = useUser()

  useEffect(() => {
    
    const fecthAuthoToken =  async () => {
      setLoadingUserInformaction(true);
      const accessToken =  await getAccessTokenSilently({ audience: `api-autenticacion-xelda` });
      localStorage.setItem("Token", accessToken);
      //console.log("Token: ", accessToken)
      await getUserLogin(
        (response)=>{
          //console.log("Respuesta: ", response);
          setUserData(response.data);
          setLoadingUserInformaction(false);
        }, 
        (err)=>{
          console.log("Error: ", err);
          setLoadingUserInformaction(false);
          logout({returnTo:'https://gentle-earth-75322.herokuapp.com/'});
          
        }
        );
    };
    if(isAuthenticated){
      fecthAuthoToken();
    }
  }, [isAuthenticated, getAccessTokenSilently, logout, setUserData]);

  if (isLoading || loadingUserInformaction) return <ReactLoading type='cylon' color='#2C77EB' height={667} width={375} />
  if(!isAuthenticated){
    return loginWithRedirect();
  }

  return (

      <>
        <MainSidebar />
        <NavBar />
         <div className="main-content">
          <section className="section">{children}</section>
        </div>
        <Footer />
       
      </>
   
  );
};

export default Layouts;
