// function Education() {
//   const education = [
//     {
//       title: "Bachelor of Information technology",
//       year: "2025 - 2028",
//       college: "JG UNIVERSITY"
//     },
//     {
//       title: "Higher Secondary",
//       year: "2021 - 2023",
//       college: "Gannath vidhyalay"
//     }
//   ];

//   return (
//     <div className="min-h-screen px-10 py-20">
//       <h1 className="text-4xl font-bold text-cyan-400 mb-8">Education</h1>

//       <div className="grid md:grid-cols-2 gap-8">
//         {education.map((item, index) => (
//           <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition">
//             <h2 className="text-2xl font-bold">{item.title}</h2>
//             <p className="text-cyan-400">{item.year}</p>
//             <p>{item.college}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Education;
function Education() {
  const educationData = [
    {
      degree: "Bachelor of Information Technology (IT)",
      year: "2023 - 2026",
      institute: "JG university",
      description:
        "Currently pursuing my BCA with a strong focus on programming, web development, database management, and software engineering. During this journey, I have worked on multiple projects and improved my problem-solving abilities."
    },
    {
      degree: "Higher Secondary Education",
      year: "2021 - 2023",
      institute: "XYZ Higher Secondary School",
      description:
        "Completed higher secondary education with computer science as the main subject. Built a strong foundation in mathematics, logical thinking, and basic programming concepts."
    },
    {
      degree: "Secondary Education",
      year: "2019 - 2021",
      institute: "XYZ High School",
      description:
        "Completed my secondary education while developing an interest in technology and computers, which later became my career path."
    }
  ];

  const certifications = [
    "React.js Development",
    "JavaScript Fundamentals",
    "Frontend Web Development",
    "Git & GitHub",
  ];

  const achievements = [
    "Built 10+ responsive projects",
    "Completed multiple frontend certifications",
    "Improved problem-solving skills",
    "Created modern UI/UX portfolio projects"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white px-8 py-20">
      
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold text-cyan-400 mb-4">
          My Education
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          My academic journey and continuous learning path that shaped my
          technical skills, creativity, and problem-solving abilities.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="space-y-10 mb-20">
        {educationData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300 border-l-4 border-cyan-400"
          >
            <h2 className="text-3xl font-bold mb-2">{item.degree}</h2>
            <p className="text-cyan-400 mb-2">{item.year}</p>
            <p className="text-gray-300 mb-4">{item.institute}</p>
            <p className="text-gray-400 leading-8">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:bg-cyan-500 hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold">{cert}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">
          Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300"
            >
              <p className="text-lg text-gray-300">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;