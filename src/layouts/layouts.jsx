import Aside from 'components/template-base/Aside';
import Footer from 'components/template-base/Footer';
import Header from 'components/template-base/Header';

const Layouts = ({children}) => {
    return (
        <>
            <Header />
            <Aside />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layouts;

