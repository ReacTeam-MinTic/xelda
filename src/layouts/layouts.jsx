
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
  const [loadingUserInformation, setLoadingUserInformation] = useState(false);
  const { setUserData } = useUser();

  useEffect(() => {
    const fetchAuth0Token = async () => {
      // si se quieren hacer validaciones con el token:
      // if (localStorage.getItem('token')) {
      //   // validar fecha de expiracion del token
      // } else {
      //   // pedir token
      // }

      // 1. pedir token a auth0
      setLoadingUserInformation(true);
      const accessToken = await getAccessTokenSilently({
        audience: `api-autenticacion-xelda`,
      });
      // 2. recibir token de auth0
      localStorage.setItem('Token', accessToken);
      console.log(accessToken);
      // 3. enviarle el token a el backend
      await getUserLogin(
        (response) => {
          console.log('response con datos del usuario', response);
          setUserData(response.data);
          setLoadingUserInformation(false);
        },
        (err) => {
          console.log('err', err);
          setLoadingUserInformation(false);
          logout({ returnTo: 'https://gentle-earth-75322.herokuapp.com/' });
        }
      );
    };
    if (isAuthenticated) {
      fetchAuth0Token();
    }
  }, [isAuthenticated, getAccessTokenSilently, logout, setUserData]);

  if (isLoading || loadingUserInformation)
    return <ReactLoading type='cylon' color='#2C77EB' height={667} width={375} />;

  if (!isAuthenticated) {
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
