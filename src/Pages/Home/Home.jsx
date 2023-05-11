import useTitle from "../../hooks/useTitle";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";



const Home = () => {
    useTitle("Home");
    return (
        <div>
           <Banner />
           <About />
           <Services />
        </div>
    );
};

export default Home;