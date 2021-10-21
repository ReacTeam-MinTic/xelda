import Footer from "components/template-base/Footer";
import MainSidebar from "components/template-base/MainSidebar";
import NavBar from "components/template-base/NavBar";
import PrivateRoute from "components/auth0/privateRoute";

const Layouts = ({ children }) => {
  return (
    <PrivateRoute>
      <>
        <MainSidebar />
        <NavBar />
        <div class="main-content">
          <section class="section">{children}</section>
        </div>
        <Footer />
      </>
    </PrivateRoute>
  );
};

export default Layouts;
