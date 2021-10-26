import Footer from "components/template-base/Footer";
import MainSidebar from "components/template-base/MainSidebar";
import NavBar from "components/template-base/NavBar";

const IndexSup = ({ children }) => {
  return (
    
      <>
        <MainSidebar />
        <NavBar />
          {children}
        <Footer />
      </>
  
  );
};

export default IndexSup;
