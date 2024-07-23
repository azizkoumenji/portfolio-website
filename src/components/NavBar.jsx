function NavBar() {
  return (
    <div className="flex px-5 lg:px-10 justify-between drop-shadow-md max-lg:text-sm bg-[#1A1A1A]/50  w-[75%]	p-3 mt-5 py-2 mx-auto rounded-lg border border-border-grey backdrop-blur-xl font-semibold sticky top-3 xl:px-14">
      <a
        href="#home"
        className="text-light-grey	hover:text-white cursor-pointer"
      >
        Home
      </a>
      <a
        href="#about"
        className="text-light-grey	hover:text-white cursor-pointer"
      >
        About
      </a>
      <a
        href="#projects"
        className="text-light-grey	hover:text-white cursor-pointer"
      >
        Projects
      </a>
      <a
        href="#technologies"
        className="text-light-grey	hover:text-white cursor-pointer"
      >
        Technologies
      </a>
      <a
        href="#links"
        className="text-light-grey	hover:text-white cursor-pointer"
      >
        Links
      </a>
      <a
        href="#contact"
        className="text-light-grey	hover:text-white cursor-pointer"
      >
        Contact
      </a>
    </div>
  );
}

export default NavBar;
