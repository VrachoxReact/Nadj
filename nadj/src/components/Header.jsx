import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import PropTypes from "prop-types";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src="/placeholder.svg"
              alt="Zeko Rent Logo"
              className="h-8 w-8 mr-2 md:h-10 md:w-10 md:mr-3"
            />
            <span className="text-lg font-bold text-gray-800 md:text-xl">
              Zeko Rent
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <NavLink to="hero" smooth={true} duration={500} offset={-70}>
              Home
            </NavLink>
            <NavLink to="services" smooth={true} duration={500} offset={-70}>
              Services
            </NavLink>
            <NavLink
              to="testimonials"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Testimonials
            </NavLink>
            <NavLink to="contact" smooth={true} duration={500} offset={-70}>
              Contact
            </NavLink>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900"
            >
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900"
            >
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </a>
          </nav>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-2 pt-2 pb-4 space-y-1">
            <MobileNavLink
              to="hero"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </MobileNavLink>
            <MobileNavLink
              to="services"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </MobileNavLink>
            <MobileNavLink
              to="testimonials"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </MobileNavLink>
            <MobileNavLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </MobileNavLink>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, children, ...props }) {
  return (
    <Link
      to={to}
      className="text-gray-500 hover:text-gray-900 px-2 py-1 rounded-md text-sm font-medium cursor-pointer"
      {...props}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children, onClick, ...props }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-gray-500 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
      {...props}
    >
      {children}
    </Link>
  );
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

MobileNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Header;
