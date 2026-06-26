// // // function About() {
// // //   return (
// // //     <div className="min-h-screen px-10 py-20">
// // //       <h1 className="text-4xl font-bold text-cyan-400 mb-8">About Me</h1>

// // //       <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
// // //         <p className="text-lg leading-8 text-gray-300">
// // //           I am B-tech student in information technology.a passionate Full Stack Developer from Ahmedabad, India.
// // //           I enjoy creating modern web applications with beautiful user
// // //           interfaces and powerful backend functionality.

// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default About;
// // function About() {
// //   const skills = [
// //     "HTML",
// //     "CSS",
// //     "JavaScript",
// //     "React.js",
// //     "Tailwind CSS",
// //     "Bootstrap",
// //     "Git & GitHub",
// //     "Responsive Design"
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gradient-to-r from-gray-950 via-black to-gray-900 text-white px-8 py-20">
      
      
// //       <div className="text-center mb-16">
// //         <h1 className="text-5xl font-bold text-cyan-400 mb-4">
// //           About Me
// //         </h1>
// //         <p className="text-gray-400 text-lg max-w-3xl mx-auto">
// //           Learn more about my journey, skills, and passion for web development.
// //         </p>
// //       </div>


// //       <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        
        
// //         <div>
// //           <img
// //             src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
// //             alt="about"
// //             className="rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
// //           />
// //         </div>

       
// //         <div>
// //           <h2 className="text-4xl font-bold mb-6">
// //             Frontend Developer & UI Designer
// //           </h2>

// //           <p className="text-gray-300 leading-8 mb-6">
// //             I am a passionate web developer with expertise in building modern,
// //             responsive, and attractive websites using React.js and Tailwind CSS.
// //             My goal is to create user-friendly interfaces with smooth experiences
// //             and elegant designs.
// //           </p>

// //           <p className="text-gray-400 leading-8 mb-6">
// //             I enjoy solving real-world problems through coding and continuously
// //             learning new technologies. My focus is on frontend development,
// //             performance optimization, and creating visually appealing web
// //             applications.
// //           </p>

// //           <button className="px-6 py-3 bg-cyan-500 rounded-lg hover:bg-cyan-700 transition">
// //             Download CV
// //           </button>
// //         </div>
// //       </div>

  
// //       <div className="mb-20">
// //         <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">
// //           My Skills
// //         </h2>

// //         <div className="grid md:grid-cols-4 gap-6">
// //           {skills.map((skill, index) => (
// //             <div
// //               key={index}
// //               className="bg-gray-800 p-6 rounded-xl text-center hover:bg-cyan-500 hover:scale-105 transition duration-300 shadow-lg"
// //             >
// //               <h3 className="text-xl font-semibold">{skill}</h3>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

    
// //       <div>
// //         <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">
// //           My Experience
// //         </h2>

// //         <div className="grid md:grid-cols-3 gap-8">
          
// //           <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:scale-105 transition">
// //             <h3 className="text-2xl font-bold mb-3">1+ Years</h3>
// //             <p className="text-gray-400">
// //               Experience in frontend development with modern technologies.
// //             </p>
// //           </div>

// //           <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:scale-105 transition">
// //             <h3 className="text-2xl font-bold mb-3">10+ Projects</h3>
// //             <p className="text-gray-400">
// //               Successfully built responsive and interactive web applications.
// //             </p>
// //           </div>

// //           <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:scale-105 transition">
// //             <h3 className="text-2xl font-bold mb-3">Learning</h3>
// //             <p className="text-gray-400">
// //               Continuously improving skills in React, UI/UX, and backend basics.
// //             </p>
// //           </div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default About;
// function About() {
//   const skills = [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React.js",
//     "Tailwind CSS",
//     "Bootstrap",
//     "Git",
//     "GitHub"
//   ];

//   return (
//     <div className="min-h-screen px-6 md:px-8 py-16 md:py-20">
//       <h1 className="text-3xl sm:text-4xl md:text-5xl text-cyan-400 text-center mb-10">
//         About Me
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
//         <img
//           src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
//           alt="about"
//           className="w-full max-w-sm mx-auto rounded-3xl"
//         />

//         <div>
//           <h2 className="text-3xl font-bold mb-6">
//             Frontend Developer
//           </h2>

//           <p className="text-gray-300 leading-8">
//             I am passionate about creating responsive and modern websites.
//             I enjoy building UI and improving user experiences.
//           </p>
//         </div>
//       </div>

//       <h2 className="text-4xl text-center mb-10 text-cyan-400">
//         Skills
//       </h2>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
//         {skills.map((skill, index) => (
//           <div key={index} className="bg-gray-800 p-6 rounded-xl text-center">
//             {skill}
//           </div>
//         ))}
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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white px-6 md:px-12 py-20">

      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold text-cyan-400 mb-4">
          About Me
        </h1>
        <p className="text-gray-400 max-w-4xl mx-auto text-lg leading-8">
          Get to know more about me, my skills, my journey, and my passion for
          creating modern and interactive web applications.
        </p>
      </div>

      {/* Main About Section */}
      <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
        
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
            alt="about"
            className="w-80 md:w-[450px] rounded-3xl shadow-2xl border-4 border-cyan-400 hover:scale-105 transition duration-500"
          />
        </div>

        {/* Description */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Frontend Developer & Creative Thinker
          </h2>

          <p className="text-gray-300 leading-8 mb-6">
            I am a passionate frontend developer who loves building modern,
            responsive, and user-friendly web applications. My journey in web
            development started with curiosity and has now become my career path.
          </p>

          <p className="text-gray-400 leading-8 mb-6">
            I specialize in React.js, Tailwind CSS, and JavaScript, focusing on
            creating visually attractive and high-performing websites. I enjoy
            solving problems, improving user experiences, and continuously
            learning new technologies.
          </p>

          <p className="text-gray-400 leading-8 mb-8">
            My goal is to become a full-stack developer and contribute to
            impactful projects that make a difference in the digital world.
          </p>

          <button className="px-8 py-4 bg-cyan-500 rounded-xl hover:bg-cyan-600 transition duration-300">
            Download CV
          </button>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">
          My Skills
        </h2>

        <div className="space-y-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
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
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-4xl font-bold text-cyan-400 mb-2">1+</h2>
          <p className="text-gray-400">Years of Learning Experience</p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-4xl font-bold text-cyan-400 mb-2">15+</h2>
          <p className="text-gray-400">Projects Completed</p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-4xl font-bold text-cyan-400 mb-2">6+</h2>
          <p className="text-gray-400">Technologies Learned</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">
          What I Do
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:bg-cyan-500 hover:scale-105 transition duration-300 text-center"
            >
              <h3 className="text-lg font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Hobbies Section */}
      <div>
        <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">
          My Interests
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300"
            >
              <p className="text-gray-300">{hobby}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;