import gradient from "../assets/gradient.png";

function Home() {
  return (
    <div className=" flex flex-row justify-between items-center" id="home">
      <div className="-mt-16">
        <div className="max-sm:text-3xl sm:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
          <h1 className="text-white font-semibold">Aziz</h1>
          <h1 className="text-white font-semibold">Koumenji</h1>
        </div>
        <h4 className="text-light-grey text-xl mt-5 max-sm:text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-4xl 2xl:text-4xl">
          Student - Full Stack Web Developer
        </h4>
      </div>
      <img
        src={gradient}
        alt="gradient"
        className="w-3/6 object-contain -mt-16 -mr-10"
      />
    </div>
  );
}
export default Home;
