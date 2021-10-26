import Footer from "components/Footer";
import MainSidebar from "components/MainSidebar";
import NavBar from "components/NavBar";
import { useAuth0 } from "@auth0/auth0-react";
import { useUser } from "context/userContext";
import { useEffect, useState } from "react";
import { getUserLogin } from "utils/api";
import ReactLoading from "react-loading"

const Layouts = ({ children }) => {

  const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently, logout } = useAuth0();
  const [loadingUserInformaction, setLoadingUserInformaction] = useState(false);
  const { setUserData } = useUser()

  useEffect(() => {

    const fetchAuth0Token = async () => {
      console.log("FUnción isAuthenticated #1: ", isAuthenticated)
      setLoadingUserInformaction(true);

      const accessToken = await getAccessTokenSilently({ audience: `api-autenticacion-xelda` });

      localStorage.setItem("Token", accessToken);
      console.log("Token: ", accessToken)
      console.log("FUnción isAuthenticated #1.5: ", isAuthenticated)
      await getUserLogin(
        (response) => {
          //console.log("Respuesta: ", response);
          setUserData(response.data);
          setLoadingUserInformaction(false);
          console.log("FUnción isAuthenticated #2: ", isAuthenticated)
        },
        (err) => {
          console.log("Error: ", err);
          setLoadingUserInformaction(false);
          logout({ returnTo: 'https://gentle-earth-75322.herokuapp.com/' });

        }
      );
    };
    console.log("FUnción isAuthenticated #3: ", isAuthenticated)
    if (isAuthenticated) {
      fetchAuth0Token();
    }
  }, [isAuthenticated, getAccessTokenSilently, logout, setUserData]);

  if (isLoading || loadingUserInformaction) return <ReactLoading type='cylon' color='#2C77EB' height={667} width={375} />

  if (!isAuthenticated) {
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
