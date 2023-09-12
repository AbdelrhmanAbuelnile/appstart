import Footer from "./components/Footer"
import Header from "./components/Header/Header"
import HomeHero from "./components/Home/HomeHero"
import HomeServices from "./components/Home/HomeServices"
import PotrfolioContainer from "./components/portfolio/PotrfolioContainer"



function App() {

  return (
    <div className="bg-fourth font-primary overflow-hidden">
      <Header />
      <HomeHero />
      <PotrfolioContainer />
      <HomeServices />

      <Footer />

      


    </div>
  )
}

export default App
