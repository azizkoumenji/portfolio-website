function Card() {
  return (
    <div className="p-2 mr-16 mt-5 rounded-md h-96 2xl:w-96 xl:w-72 lg:w-60 bg-[#0B0B0B] border border-[#3E3E3E] flex justify-center items-center">
      <div className="rounded-md bg-gradient-to-b from-[#1f1f1f] to-[#0c0c0c] hover:from-[#262626] hover:to-[#171616]  h-full w-full flex flex-col items-center">
        <div className="text-white w-full flex justify-around">
          <a>View Project</a>
          <a>View Code</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
