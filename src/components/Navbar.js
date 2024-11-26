import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../index.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3 className="logo">Magician Asif</h3>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#about">About Me</a>
        <a href="/#porjects">Projects</a>
        <a href="/#passion">Passion</a>
        <a href="/#hire-me">Hire Me</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
