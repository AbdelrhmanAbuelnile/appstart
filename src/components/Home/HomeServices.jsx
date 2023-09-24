import SevicesCard from "./SevicesCard";

function HomeServices() {
  return (
    <section
      id="sevices"
      className="flex justify-center items-center flex-col gap-8 py-24 relative"
    >
      <h2 className="text-4xl text-primary font-extrabold mb-10">
        Our Services
      </h2>
      <div className="flex justify-center items-center flex-col md:flex-row md:flex-wrap gap-8">
        <SevicesCard />
      </div>
    </section>
  );
}

export default HomeServices;
