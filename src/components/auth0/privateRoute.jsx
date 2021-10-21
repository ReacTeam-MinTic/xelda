import { useAuth0 } from "@auth0/auth0-react";
import { useUser } from "context/userContext";
import { useEffect } from "react";
import { getUserLogin } from "utils/api";

const PrivateRoute = ({ children }) => {
  const {
    loginWithRedirect,
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
  } = useAuth0();

  const {setUserData} = useUser();


  useEffect(() => {
    const fecthAuthoToken =  async () => {
      const accessToken =  await getAccessTokenSilently({ audience: `api-xelda-auth` });
      localStorage.setItem("Token", accessToken);
      console.log("Token: ", accessToken)
      await getUserLogin(
        (response)=>{
          console.log("Respuesta: ", response);
          setUserData(response.data);
        }, 
        (err)=>{
          console.log("Error: ", err);
        }
        );
    };
    if(isAuthenticated){
      fecthAuthoToken();
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  if (isLoading) return <div>is loading.....</div>;
  return isAuthenticated ? <>{children}</> : loginWithRedirect();
};

export default PrivateRoute;
