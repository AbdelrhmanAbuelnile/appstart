import ProjectCard from "./ProjectCard";
// import { motion } from "framer-motion"

import screen1 from "../../assets/app1/screen1.png";
import screen2 from "../../assets/app1/screen2.png";
import screen3 from "../../assets/app1/screen3.png";
import screen4 from "../../assets/app1/screen4.png";
import screen5 from "../../assets/app1/screen5.png";
import screen6 from "../../assets/app1/screen6.png";
import screen7 from "../../assets/app1/screen7.png";
import screen8 from "../../assets/app1/screen8.png";

import secondApp1 from "../../assets/app2/screen1.png";
import secondApp2 from "../../assets/app2/screen2.png";
import secondApp3 from "../../assets/app2/screen3.png";
import secondApp4 from "../../assets/app2/screen4.png";
import secondApp5 from "../../assets/app2/screen5.png";

function PotrfolioContainer() {
  const screen = [
    {
      image: screen1,
      alt: "betybetk wireframe",
    },
    {
      image: screen2,
      alt: "betybetk wireframe2",
    },
    {
      image: screen3,
      alt: "betybetk wireframe3",
    },
    {
      image: screen4,
      alt: "betybetk wireframe4",
    },
    {
      image: screen5,
      alt: "betybetk wireframe5",
    },
    {
      image: screen6,
      alt: "betybetk wireframe6",
    },
    {
      image: screen7,
      alt: "betybetk wireframe7",
    },
    {
      image: screen8,
      alt: "betybetk wireframe8",
    },
  ];

  const secondApp = [
    {
      image: secondApp1,
      alt: "technomedia wireframe",
    },
    {
      image: secondApp2,
      alt: "technomedia wireframe2",
    },
    {
      image: secondApp3,
      alt: "technomedia wireframe3",
    },
    {
      image: secondApp4,
      alt: "technomedia wireframe4",
    },
    {
      image: secondApp5,
      alt: "technomedia wireframe5",
    },
  ];

  const betybetk = {
    title: "BetyBetk",
    description: "A user-friendly real estate app for seamless property buying, selling, and management, revolutionizing the industry.",
  }

    const technomedia = {
        title: "Technomedia",
        description: " Your go-to news app, delivering the latest in tech and media with speed and precision.",
    }
    const handleClick = (e) => {
      e.stopPropagation();
    };
  return (
    <div
      className="flex flex-col justify-center items-center overflow-hidden"
      onClick={handleClick}
    >
      <ProjectCard screen={screen} text={betybetk}/>
      <ProjectCard screen={secondApp} text={technomedia} />
      {/* {projectCard} */}
    </div>
  );
}

export default PotrfolioContainer;
