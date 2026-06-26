// // // import { Link } from "react-router-dom";

// // // function Navbar() {
// // //   return (
// // //     <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-lg">
// // //       <h1 className="text-2xl font-bold text-cyan-400">Portfolio</h1>

// // //       <ul className="flex gap-8 text-lg">
// // //         <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>
// // //         <li><Link to="/about" className="hover:text-cyan-400">About</Link></li>
// // //         <li><Link to="/education" className="hover:text-cyan-400">Education</Link></li>
// // //         <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
// // //       </ul>
// // //     </nav>
// // //   );
// // // }

// // // export default Navbar;  
// // import { Link } from "react-router-dom";

// // function Navbar() {
// //   return (
// //     <nav className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-5 bg-black shadow-lg">
// //       <h1 className="text-2xl font-bold text-cyan-400 mb-4 md:mb-0">
// //         Portfolio
// //       </h1>

// //       <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-lg">
// //         <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>
// //         <li><Link to="/about" className="hover:text-cyan-400">About</Link></li>
// //         <li><Link to="/education" className="hover:text-cyan-400">Education</Link></li>
// //         <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
// //       </ul>
// //     </nav>
// //   );
// // }

// // export default Navbar;
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-5 bg-white shadow-lg">
//       <h1 className="text-2xl font-bold text-cyan-400 mb-4 md:mb-0">
//         Portfolio
//       </h1>

//       <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-lg">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/education">Education</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-lg px-6 md:px-12 py-5 flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-3xl font-bold text-cyan-400 mb-4 md:mb-0">
        Harsh Panchal
      </h1>

      <ul className="flex flex-wrap justify-center gap-6 text-sm md:text-lg font-medium">
        <li><Link to="/" className="hover:text-cyan-400 transition">Home</Link></li>
        <li><Link to="/about" className="hover:text-cyan-400 transition">About</Link></li>
        <li><Link to="/education" className="hover:text-cyan-400 transition">Education</Link></li>
        <li><Link to="/contact" className="hover:text-cyan-400 transition">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;