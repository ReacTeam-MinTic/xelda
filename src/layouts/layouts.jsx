import Footer from "components/Footer";
import MainSidebar from "components/MainSidebar";
import NavBar from "components/NavBar";
import { useAuth0 } from "@auth0/auth0-react";
import { useUser } from "context/userContext";
import { useEffect, useState } from "react";
import { getUserLogin } from "utils/api";

const Layouts = ({ children }) => {

  const {loginWithRedirect, isAuthenticated,isLoading, getAccessTokenSilently, logout} = useAuth0();
  const [loadingUserInformaction, setLoadingUserInformaction]=useState(false);
  const {setUserData} = useUser()

  useEffect(() => {
    
    const fecthAuthoToken =  async () => {
      setLoadingUserInformaction(true);
      const accessToken =  await getAccessTokenSilently({ audience: `api-autenticacion-xelda` });
      localStorage.setItem("token", accessToken);
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
  }, [isAuthenticated, getAccessTokenSilently]);

  if (isLoading || loadingUserInformaction) return <div>is loading.....</div>;
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
