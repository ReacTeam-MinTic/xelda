import Footer from "components/template-base/Footer";
import MainSidebar from "components/template-base/MainSidebar";
import NavBar from "components/template-base/NavBar";

const IndexSup = ({ children }) => {
  return (
    
      <>
      <PrivateRoute>
        <MainSidebar />
        <NavBar />
        {children}
        <Footer />
        </PrivateRoute>
      </>
  
  );
};

export default IndexSup;
