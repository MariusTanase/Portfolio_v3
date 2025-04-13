import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 ease-in-out
          ${hasScrolled ? "bg-secondary/80 backdrop-blur-sm" : "bg-transparent"}
        `}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo / Name */}
            <Link
              to="home"
              smooth={true}
              className="text-2xl md:text-3xl font-bold cursor-pointer"
            >
              Marius<span className="italic text-primary">Tanase</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <Link
                    to="projects"
                    smooth={true}
                    className="text-white hover:text-primary transition-colors cursor-pointer"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    smooth={true}
                    className="text-white hover:text-primary transition-colors cursor-pointer"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Burger Menu Button (Mobile) */}
            <button
              className="md:hidden z-50 p-2 text-white"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <IoMdClose size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 bg-secondary/98 backdrop-blur-lg z-40
          flex items-center justify-center
          transition-all duration-300 ease-in-out
          md:hidden
          ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        <nav className="text-center">
          <ul className="space-y-8">
            <li>
              <Link
                to="home"
                smooth={true}
                className="text-3xl font-bold text-white hover:text-primary transition-colors cursor-pointer"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                className="text-3xl font-bold text-white hover:text-primary transition-colors cursor-pointer"
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                className="text-3xl font-bold text-white hover:text-primary transition-colors cursor-pointer"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
