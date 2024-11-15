import logo from "../assets/RinsafLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-3">
      <div className="flex lex-shrink-0 items-center">
        <img className="mx-2 w-24" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/ririn-safitri-s-pd-08a8ba222/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Rinsaf14"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.youtube.com/channel/UCwEPK3h0WVji36EZeCjHiIA/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Youtube"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.instagram.com/muslimahcoding/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
