import { useUser } from "context/userContext";
import React from "react";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserLogin } from "utils/api";

const PrivateRoute = ({ rolesList, children }) => {
  const {
    loginWithRedirect,
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
  } = useAuth0();

  const { userData } = useUser();
  if (rolesList.includes(userData.role)) {
    return children;
  }


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
