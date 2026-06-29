
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/50 backdrop-blur-lg shadow-lg px-6 md:px-12 py-5">
      
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-balck-400">
          Harsh Panchal
        </h1>

        <ul className="hidden md:flex flex-wrap justify-center gap-6 text-sm md:text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-cyan-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-cyan-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/education" className="hover:text-cyan-400 transition">
              Education
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-cyan-400 transition">
              Contact
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="flex flex-col items-center gap-4 mt-6 md:hidden text-lg font-medium bg-white rounded-xl shadow-lg py-6">
          <li>
            <Link
              to="/"
              className="hover:text-cyan-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-cyan-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/education"
              className="hover:text-cyan-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Education
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-cyan-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;