import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-lg">
      <h1 className="text-2xl font-bold text-cyan-400">Portfolio</h1>

      <ul className="flex gap-8 text-lg">
        <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-cyan-400">About</Link></li>
        <li><Link to="/education" className="hover:text-cyan-400">Education</Link></li>
        <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;