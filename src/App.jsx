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
      <div className="flex flex-col justify-center items-center pt-20">
          <h1 className="text-4xl text-primary font-extrabold ">
            Portfolio
          </h1>
        <PotrfolioContainer />
      </div>
      <HomeServices />

      <Footer />

      


    </div>
  )
}

export default App
