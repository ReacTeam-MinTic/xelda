import Aside from 'components/Aside';
import Footer from 'components/Footer';
import Header from 'components/Header';

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

