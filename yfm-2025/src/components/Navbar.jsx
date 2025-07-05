import { useState } from "react";
import { LINKS } from "../constants";
import { RiCloseFill, RiMenu3Fill } from "@remixicon/react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className="flex justify-between items-center max-w-7xl mx-auto
          md:my-2 bg-stone-950/30 p-4 md:rounded-xl backdrop-blur-lg"
      >
        <div className="text-white font-semibold text-lg uppercase">
          <a href="/">
            <img src={logo} alt="" className="mx-2" width={50} height={33} />
          </a>
        </div>

        <div className="hidden md:flex space-x-8">
          {LINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="text-white 
                      hover:text-stone-400 transition duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white forcus:outline-none" aria-label={menuOpen ? "Close Menu" : "Open Menu"}>
            {menuOpen ? <RiCloseFill className="w-6 h-6" /> : <RiMenu3Fill className="w-6-h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="md:hidden p-2 bg-stone-950/30 backdrop-blur-lg
              rounded-xl flex flex-col space-y-4 max-w-6xl mx-auto"
        >
          {LINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="text-white
                      hover:text-stone-400 transition duration-300"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
