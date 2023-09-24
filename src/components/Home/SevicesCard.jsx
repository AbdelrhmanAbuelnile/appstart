import web from "../../assets/web.png";
import graphic from "../../assets/graphic.png";
import marketing from "../../assets/marketing.png";
import Modal from "../ServicesModal/Modal";

import { useState } from "react";

function SevicesCard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  function toggleModal(selectedService) {
    setSelectedService(selectedService);
    setShowModal(!showModal);
  }

  const service = [
    {
      name: "Development",
      icon: web,
      describtion: "front-end development icon",
    },
    {
      name: "Graphic Design",
      icon: graphic,
      describtion: "graphic design icon",
    },
    {
      name: "Marketing",
      icon: marketing,
      describtion: "social media and digital mergeting icon",
    },
  ];

  const development = [
    {
      name: "Mobile app",
    },
    {
      name: "Web",
    },
    {
      name: "Data analysis",
    },
    {
      name: "UI/UX design",
    },
  ];

  const design = [
    {
      name: "Graphic design",
    },
    {
      name: "Video editing",
    },
    {
      name: "Animation",
    },
    {
      name: "UI/UX design",
    },
  ];

  const SocialMarketing = [
    {
      name: "Social media marketing",
    },
    {
      name: "Digital marketing",
    },
    {
      name: "SEO",
    },
    {
      name: "Content writing",
    },
  ];

  const services = service.map((el) => (
    <div
      onClick={() => toggleModal(el)}
      key={el.name}
      className="cursor-pointer bg-primary rounded-lg shadow-xl shadow-slate-400 p-10 flex flex-col justify-center items-center hover:bg-secondry duration-150 max-w-[305px]"
    >
      <img src={el.icon} alt={el.describtion} className="w-56" loading="lazy" />
      <h1 className="text-xl font-medium text-third mt-8">{el.name}</h1>

      {showModal && selectedService && (
        <Modal
          toggleModal={toggleModal}
          text={
            selectedService.name === "Development"
              ? development
              : selectedService.name === "Graphic Design"
              ? design
              : SocialMarketing
          }
        />
      )}
    </div>
  ));
  return <>{services}</>;
}
export default SevicesCard;
