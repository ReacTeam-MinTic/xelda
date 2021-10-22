import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useUser } from "context/userContext";
import { useEffect, useState } from "react";
import { getUserLogin } from "utils/api";

const PublicPage = () => {
  const {
    loginWithRedirect,
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
    logout,
  } = useAuth0();
  const [loadingUserInformaction, setLoadingUserInformaction] = useState(false);
  const { setUserData } = useUser();
  const logoutCloseToken = () => {
    logout({ returnTo: window.location.origin });
    localStorage.setItem("Token", null);
  };
  useEffect(() => {
    const fecthAuthoToken = async () => {
      setLoadingUserInformaction(true);
      const accessToken = await getAccessTokenSilently({
        audience: `api-xelda-auth`,
      });
      localStorage.setItem("Token", accessToken);
      //console.log("Token: ", accessToken);
      await getUserLogin(
        (response) => {
          console.log("Respuesta: ", response);
          setUserData(response.data);
          setLoadingUserInformaction(false);
        },
        (err) => {
          console.log("Error: ", err);
          setLoadingUserInformaction(false);
          logout();
        }
      );
    };
    if (isAuthenticated) {
      fecthAuthoToken();
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  if (isLoading || loadingUserInformaction) return <div>is loading.....</div>;
  if (!isAuthenticated) {
    return loginWithRedirect();
  }
  return (
    <div>
      <h1>Aqui va la pagina publica</h1>
      <button
        onClick={() => loginWithRedirect()}
        className="dropdown-item has-icon text-danger"
      >
        <i className="fas fa-sign-out-alt"></i> Iniciar sesión
      </button>
      <button
        onClick={() => logoutCloseToken()}
        className="dropdown-item has-icon text-danger"
      >
        <i className="fas fa-sign-out-alt"></i> Salir
      </button>
      <a href="/sales">clic</a>
    </div>
  );
};

export default PublicPage;
