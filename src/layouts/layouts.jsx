import Footer from "components/template-base/Footer";
import MainSidebar from "components/template-base/MainSidebar";
import NavBar from "components/template-base/NavBar";



const Layouts = ({ children }) => {


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
