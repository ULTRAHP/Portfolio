// function About() {
//   const skills = [
//     { name: "HTML", level: "95%" },
//     { name: "CSS", level: "90%" },
//     { name: "JavaScript", level: "88%" },
//     { name: "React.js", level: "92%" },
//     { name: "Tailwind CSS", level: "95%" },
//     { name: "Git & GitHub", level: "85%" },
//   ];

//   const services = [
//     "Frontend Development",
//     "Responsive Web Design",
//     "UI/UX Design",
//     "React Application Development",
//     "Website Optimization",
//     "Portfolio Website Design",
//   ];

//   const hobbies = [
//     "Learning new technologies",
//     "Building side projects",
//     "UI Designing",
//     "Problem Solving",
//     "Reading tech blogs",
//     "Exploring modern frameworks",
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white px-6 md:px-12 py-20">

//       {/* Heading */}
//       <div className="text-center mb-20">
//         <h1 className="text-5xl font-bold text-cyan-400 mb-4">
//           About Me
//         </h1>
//         <p className="text-gray-400 max-w-4xl mx-auto text-lg leading-8">
//           Get to know more about me, my skills, my journey, and my passion for
//           creating modern and interactive web applications.
//         </p>
//       </div>

//       {/* Main About Section */}
//       <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
        
//         {/* Image */}
//         <div className="flex justify-center">
//           <img
//             src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
//             alt="about"
//             className="w-80 md:w-[450px] rounded-3xl shadow-2xl border-4 border-cyan-400 hover:scale-105 transition duration-500"
//           />
//         </div>

//         {/* Description */}
//         <div>
//           <h2 className="text-4xl font-bold mb-6">
//             Frontend Developer & Creative Thinker
//           </h2>

//           <p className="text-gray-300 leading-8 mb-6">
//             I am a passionate frontend developer who loves building modern,
//             responsive, and user-friendly web applications. My journey in web
//             development started with curiosity and has now become my career path.
//           </p>

//           <p className="text-gray-400 leading-8 mb-6">
//             I specialize in React.js, Tailwind CSS, and JavaScript, focusing on
//             creating visually attractive and high-performing websites. I enjoy
//             solving problems, improving user experiences, and continuously
//             learning new technologies.
//           </p>

//           <p className="text-gray-400 leading-8 mb-8">
//             My goal is to become a full-stack developer and contribute to
//             impactful projects that make a difference in the digital world.
//           </p>

//           <button className="px-8 py-4 bg-cyan-500 rounded-xl hover:bg-cyan-600 transition duration-300">
//             Download CV
//           </button>
//         </div>
//       </div>

//       {/* Skills Section */}
//       <div className="mb-20">
//         <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">
//           My Skills
//         </h2>

//         <div className="space-y-6 max-w-4xl mx-auto">
//           {skills.map((skill, index) => (
//             <div key={index}>
//               <div className="flex justify-between mb-2">
//                 <span>{skill.name}</span>
//                 <span>{skill.level}</span>
//               </div>

//               <div className="w-full bg-gray-800 rounded-full h-3">
//                 <div
//                   className="bg-cyan-400 h-3 rounded-full"
//                   style={{ width: skill.level }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Experience Cards */}
//       <div className="grid md:grid-cols-3 gap-8 mb-20">
//         <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
//           <h2 className="text-4xl font-bold text-cyan-400 mb-2">1+</h2>
//           <p className="text-gray-400">Years of Learning Experience</p>
//         </div>

//         <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
//           <h2 className="text-4xl font-bold text-cyan-400 mb-2">15+</h2>
//           <p className="text-gray-400">Projects Completed</p>
//         </div>

//         <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
//           <h2 className="text-4xl font-bold text-cyan-400 mb-2">6+</h2>
//           <p className="text-gray-400">Technologies Learned</p>
//         </div>
//       </div>

//       {/* Services Section */}
//       <div className="mb-20">
//         <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">
//           What I Do
//         </h2>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-gray-900 p-6 rounded-xl shadow-lg hover:bg-cyan-500 hover:scale-105 transition duration-300 text-center"
//             >
//               <h3 className="text-lg font-semibold">{service}</h3>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Hobbies Section */}
//       <div>
//         <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">
//           My Interests
//         </h2>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {hobbies.map((hobby, index) => (
//             <div
//               key={index}
//               className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300"
//             >
//               <p className="text-gray-300">{hobby}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;
function About() {
  const skills = [
    { name: "HTML", level: "95%" },
    { name: "CSS", level: "90%" },
    { name: "JavaScript", level: "88%" },
    { name: "React.js", level: "92%" },
    { name: "Tailwind CSS", level: "95%" },
    { name: "Git & GitHub", level: "85%" },
  ];

  const services = [
    "Frontend Development",
    "Responsive Web Design",
    "UI/UX Design",
    "React Application Development",
    "Website Optimization",
    "Portfolio Website Design",
  ];

  const hobbies = [
    "Learning new technologies",
    "Building side projects",
    "UI Designing",
    "Problem Solving",
    "Reading tech blogs",
    "Exploring modern frameworks",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20">

      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
          About Me
        </h1>
        <p className="text-gray-400 max-w-4xl mx-auto text-sm sm:text-base md:text-lg leading-7 md:leading-8 px-2">
          Get to know more about me, my skills, my journey, and my passion for
          creating modern and interactive web applications.
        </p>
      </div>

      {/* Main About Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-20">
        
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
            alt="about"
            className="w-56 sm:w-72 md:w-[450px] rounded-3xl shadow-2xl border-4 border-cyan-400 hover:scale-105 transition duration-500"
          />
        </div>

        {/* Description */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Frontend Developer & Creative Thinker
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-7 md:leading-8 mb-6">
            I am a passionate frontend developer who loves building modern,
            responsive, and user-friendly web applications. My journey in web
            development started with curiosity and has now become my career path.
          </p>

          <p className="text-gray-400 text-sm sm:text-base leading-7 md:leading-8 mb-6">
            I specialize in React.js, Tailwind CSS, and JavaScript, focusing on
            creating visually attractive and high-performing websites. I enjoy
            solving problems, improving user experiences, and continuously
            learning new technologies.
          </p>

          <p className="text-gray-400 text-sm sm:text-base leading-7 md:leading-8 mb-8">
            My goal is to become a full-stack developer and contribute to
            impactful projects that make a difference in the digital world.
          </p>

          <button className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-cyan-500 rounded-xl hover:bg-cyan-600 transition duration-300">
            Download CV
          </button>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-10 text-center">
          My Skills
        </h2>

        <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2 text-sm sm:text-base">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>

              <div className="w-full bg-gray-800 rounded-full h-3">
                <div
                  className="bg-cyan-400 h-3 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-20">
        <div className="bg-gray-900 p-6 md:p-8 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
            1+
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Years of Learning Experience
          </p>
        </div>

        <div className="bg-gray-900 p-6 md:p-8 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
            15+
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Projects Completed
          </p>
        </div>

        <div className="bg-gray-900 p-6 md:p-8 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
            6+
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Technologies Learned
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="mb-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-10 text-center">
          What I Do
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:bg-cyan-500 hover:scale-105 transition duration-300 text-center"
            >
              <h3 className="text-sm sm:text-lg font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Hobbies Section */}
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-10 text-center">
          My Interests
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300"
            >
              <p className="text-gray-300 text-sm sm:text-base">{hobby}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;