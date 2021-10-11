import Footer from "components/template-base/Footer";
import MainSidebar from "components/MainSidebar";
import NavBar from "components/NavBar";
import SectionBody from "components/SectionBody";

const Layouts = ({ children }) => {
  return (
    <>
      <MainSidebar />
      <NavBar />
      <div class="main-content">
        <section class="section">
          <SectionBody>
            {children}
          </SectionBody>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Layouts;
