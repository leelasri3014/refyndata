import Header from '../components/Header';
import HeaderImage from '../components/HeaderImage';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Slideshow from '../components/Slideshow';
import Footer from '../components/Footer';

const home = () => {
    return (
        <div className='homepage'>
            <Header />
            <HeaderImage />
            <Section1 />
            <Section2 />
            <Section3 />
            <Slideshow />
            <Footer />
        </div>
    );
};

export default home;
