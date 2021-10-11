import Footer from "components/template-base/Footer";
import MainSidebar from "components/template-base/MainSidebar";
import NavBar from "components/template-base/NavBar";


const Layouts = ({ children }) => {
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
