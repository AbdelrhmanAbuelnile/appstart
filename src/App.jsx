import Footer from "./components/Footer"
import Header from "./components/Header/Header"
import HomeHero from "./components/Home/HomeHero"
import HomeServices from "./components/Home/HomeServices"
import ScrollToTopButton from "./components/ScrollToTopButton"
import PotrfolioContainer from "./components/portfolio/PotrfolioContainer"



function App() {

  return (
    <div className="bg-fourth font-primary overflow-hidden">
      <Header />
      <HomeHero />
      <section id="portfolio" className="flex flex-col justify-center items-center pt-24">
          <h1 className="text-4xl text-primary font-extrabold ">
            Portfolio
          </h1>
        <PotrfolioContainer />
      </section>
      <ScrollToTopButton />
      <HomeServices />
      <Footer />
    </div>
  )
}

export default App
