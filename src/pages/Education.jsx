// function Education() {
//   const education = [
//     {
//       year: "2023 - Present",
//       degree: "Bachelor of Information Technology",
//       college: "JG University ",
//       desc: "Currently pursuing B-tech with a strong focus on web development, programming, database management, and software engineering. During this journey, I have built multiple frontend projects and improved my problem-solving skills."
//     },
//     {
//       year: "2022 - 2025",
//       degree: "diploma-information technology",
//       college: "goverment polytechnic gandhinagar ",
//       desc: "Completed higher secondary with information. Developed strong fundamentals in mathematics, programming logic, and software basics."
//     },
//     {
//       year: "2019 - 2021",
//       degree: "Secondary Education",
//       college: "gannath School",
//       desc: "Completed secondary education while building interest in technology and computer applications."
//     }
//   ];

//   const certifications = [
//     "React.js Development",
//     "JavaScript Fundamentals",
//     "Frontend Web Development",
//     "Tailwind CSS Mastery",
//     "Git & GitHub",
//     "Responsive Web Design"
//   ];

//   const achievements = [
//     "Built 10+ modern responsive projects",
//     "Created multiple portfolio and UI design projects",
//     "Improved frontend development skills with React",
//     "Learned API integration and dynamic UI handling"
//   ];

//   return (
//     <div className="min-h-screen px-6 md:px-12 py-20 bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white">

//       {/* Heading */}
//       <div className="text-center mb-20">
//         <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
//           Education Journey
//         </h1>
//         <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-8">
//           My educational journey has shaped my technical knowledge, logical thinking,
//           and passion for creating modern web applications.
//         </p>
//       </div>

//       {/* Timeline Section */}
//       <div className="relative border-l-4 border-cyan-400 ml-4 md:ml-8 space-y-12 mb-20">
//         {education.map((item, index) => (
//           <div key={index} className="ml-8 relative">
            
//             {/* Timeline Dot */}
//             <div className="absolute -left-12 top-2 w-6 h-6 bg-cyan-400 rounded-full border-4 border-black"></div>

//             {/* Card */}
//             <div className="bg-gray-900 p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
//               <p className="text-cyan-400 font-semibold mb-2">{item.year}</p>
              
//               <h2 className="text-2xl md:text-3xl font-bold mb-2">
//                 {item.degree}
//               </h2>

//               <h3 className="text-gray-300 mb-4">{item.college}</h3>

//               <p className="text-gray-400 leading-8">{item.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>


//       <div className="mb-20">
//         <h2 className="text-4xl font-bold text-center text-cyan-400 mb-10">
//           Certifications
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {certifications.map((cert, index) => (
//             <div
//               key={index}
//               className="bg-gray-900 p-6 rounded-xl shadow-lg hover:bg-cyan-500 hover:scale-105 transition duration-300 text-center"
//             >
//               <h3 className="text-lg font-semibold">{cert}</h3>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div>
//         <h2 className="text-4xl font-bold text-center text-cyan-400 mb-10">
//           Achievements
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {achievements.map((achievement, index) => (
//             <div
//               key={index}
//               className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300"
//             >
//               <p className="text-gray-300 text-lg leading-8">
//                 {achievement}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Education;
function Education() {
  const education = [
    {
      year: "2023 - Present",
      degree: "Bachelor of Information Technology",
      college: "JG University",
      desc:
        "Currently pursuing B-tech with a strong focus on web development, programming, database management, and software engineering. During this journey, I have built multiple frontend projects and improved my problem-solving skills.",
    },
    {
      year: "2022 - 2025",
      degree: "Diploma - Information Technology",
      college: "Government Polytechnic Gandhinagar",
      desc:
        "Completed higher secondary with information. Developed strong fundamentals in mathematics, programming logic, and software basics.",
    },
    {
      year: "2019 - 2021",
      degree: "Secondary Education",
      college: "Gannath School",
      desc:
        "Completed secondary education while building interest in technology and computer applications.",
    },
  ];

  const certifications = [
    "React.js Development",
    "JavaScript Fundamentals",
    "Frontend Web Development",
    "Tailwind CSS Mastery",
    "Git & GitHub",
    "Responsive Web Design",
  ];

  const achievements = [
    "Built 10+ modern responsive projects",
    "Created multiple portfolio and UI design projects",
    "Improved frontend development skills with React",
    "Learned API integration and dynamic UI handling",
  ];

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20 bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white">
      
      {/* Heading */}
      <div className="text-center mb-16 sm:mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
          Education Journey
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-7 md:leading-8 px-2">
          My educational journey has shaped my technical knowledge, logical thinking,
          and passion for creating modern web applications.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="relative border-l-4 border-cyan-400 ml-2 sm:ml-4 md:ml-8 space-y-8 sm:space-y-12 mb-16 sm:mb-20">
        {education.map((item, index) => (
          <div key={index} className="ml-6 sm:ml-8 relative">

            {/* Timeline Dot */}
            <div className="absolute -left-8 sm:-left-12 top-2 w-4 h-4 sm:w-6 sm:h-6 bg-cyan-400 rounded-full border-4 border-black"></div>

            {/* Card */}
            <div className="bg-gray-900 p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
              <p className="text-cyan-400 font-semibold mb-2 text-sm sm:text-base">
                {item.year}
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                {item.degree}
              </h2>

              <h3 className="text-gray-300 mb-4 text-sm sm:text-base">
                {item.college}
              </h3>

              <p className="text-gray-400 text-sm sm:text-base leading-7 md:leading-8">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="mb-16 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-10">
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg hover:bg-cyan-500 hover:scale-105 transition duration-300 text-center"
            >
              <h3 className="text-sm sm:text-lg font-semibold">{cert}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-10">
          Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300"
            >
              <p className="text-gray-300 text-sm sm:text-lg leading-7 md:leading-8">
                {achievement}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;