import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import PotrfolioContainer from "../components/portfolio/PotrfolioContainer";

function PortfolioPage(){
    return(
        <>
            <Header />
            <div className="pt-20">
                <PotrfolioContainer />
            </div>
            <Footer />
        </>

    )
}

export default PortfolioPage