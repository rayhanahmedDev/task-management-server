import Footer from "../Shared/Footer/Footer";
import NavBer from "../Shared/NavBer/NavBer";
import Banner from "./Banner/Banner";
import Benefit from "./Benifit/Benefit";


const Home = () => {
    return (
        <div>
            <NavBer></NavBer>
            <div>
                <Banner></Banner>
            </div>
            <div className="mt-20">
                <Benefit></Benefit>
                <div className="mt-20">
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Home;