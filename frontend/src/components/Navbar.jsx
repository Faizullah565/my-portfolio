import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import "../styles/Navbar.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "Skills", to: "skills" },
    { name: "Education", to: "education" },
    { name: "Practical-Work", to: "practical-work" },
    { name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120; // better offset
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-gray-800 p-2 ${
        scrolled ? "navbar scrolled" : "navbar"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="home"
          smooth
          duration={500}
          offset={-120}
          className="cursor-pointer"
        >
          <div
            className={`text-2xl font-serif text-cyan-500 font-bold `}
          >
            Faizullah
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy
              hashSpy
              smooth
              offset={0}
              duration={500}
              className={`
                text-gray-300 hover:text-white px-3 py-2
                nav-link ${active === link.to ? "active" : ""}
                rounded-md transition duration-300
                cursor-pointer
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            {isOpen ? (
              <XMarkIcon className="block h-6 w-6" />
            ) : (
              <Bars3Icon className="block h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy
              hashSpy
              smooth
              offset={0}
              duration={500}
              onClick={() => setIsOpen(false)} // auto close
              className={`
                block px-3 py-2 rounded-md transition duration-300 cursor-pointer
                ${
                  active === link.to
                    ? "text-cyan-400 bg-gray-700"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;