
import Footer from "components/template-base/Footer";
import MainSidebar from "components/template-base/MainSidebar";
import NavBar from "components/template-base/NavBar";
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
      const accessToken =  await getAccessTokenSilently({ audience: `api-xelda-auth` });
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
          logout({returnTo:'http://localhost:3000/'});
          
        }
        );
    };
    if(isAuthenticated){
      fecthAuthoToken();
    }
  }, [isAuthenticated, getAccessTokenSilently, logout, setUserData]);

  if (isLoading || loadingUserInformaction) return <ReactLoading type='cylon' color='#abc123' height={667} width={375} />
  if(!isAuthenticated){
    return loginWithRedirect();
  }

  return (

      <>
        <MainSidebar />
        <NavBar />
         <div class="main-content">
          <section class="section">{children}</section>
        </div>
        <Footer />
       
      </>
   
  );
};

export default Layouts;
