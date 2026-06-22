// function About() {
//   return (
//     <div className="min-h-screen px-10 py-20">
//       <h1 className="text-4xl font-bold text-cyan-400 mb-8">About Me</h1>

//       <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
//         <p className="text-lg leading-8 text-gray-300">
//           I am B-tech student in information technology.a passionate Full Stack Developer from Ahmedabad, India.
//           I enjoy creating modern web applications with beautiful user
//           interfaces and powerful backend functionality.

//         </p>
//       </div>
//     </div>
//   );
// }

// export default About;
function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Bootstrap",
    "Git & GitHub",
    "Responsive Design"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-950 via-black to-gray-900 text-white px-8 py-20">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-cyan-400 mb-4">
          About Me
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Learn more about my journey, skills, and passion for web development.
        </p>
      </div>

      {/* About Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        
        {/* Left Side */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
            alt="about"
            className="rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
          />
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Frontend Developer & UI Designer
          </h2>

          <p className="text-gray-300 leading-8 mb-6">
            I am a passionate web developer with expertise in building modern,
            responsive, and attractive websites using React.js and Tailwind CSS.
            My goal is to create user-friendly interfaces with smooth experiences
            and elegant designs.
          </p>

          <p className="text-gray-400 leading-8 mb-6">
            I enjoy solving real-world problems through coding and continuously
            learning new technologies. My focus is on frontend development,
            performance optimization, and creating visually appealing web
            applications.
          </p>

          <button className="px-6 py-3 bg-cyan-500 rounded-lg hover:bg-cyan-700 transition">
            Download CV
          </button>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">
          My Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl text-center hover:bg-cyan-500 hover:scale-105 transition duration-300 shadow-lg"
            >
              <h3 className="text-xl font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div>
        <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">
          My Experience
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-3">1+ Years</h3>
            <p className="text-gray-400">
              Experience in frontend development with modern technologies.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-3">10+ Projects</h3>
            <p className="text-gray-400">
              Successfully built responsive and interactive web applications.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-3">Learning</h3>
            <p className="text-gray-400">
              Continuously improving skills in React, UI/UX, and backend basics.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;