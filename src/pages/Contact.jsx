// function Contact() {
//   return (
//     <div className="min-h-screen px-10 py-20">
//       <h1 className="text-4xl font-bold text-cyan-400 mb-8">Contact Me</h1>

//       <form className="max-w-xl mx-auto bg-gray-900 p-8 rounded-xl shadow-lg">
//         <input
//           type="text"
//           placeholder="Your Name"
//           className="w-full p-3 mb-4 rounded bg-gray-800"
//         />

//         <input
//           type="email"
//           placeholder="Your Email"
//           className="w-full p-3 mb-4 rounded bg-gray-800"
//         />

//         <textarea
//           placeholder="Your Message"
//           className="w-full p-3 mb-4 rounded bg-gray-800"
//           rows="5"
//         ></textarea>

//         <button className="bg-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-700">
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Contact;
function Contact() {
  const contactInfo = [
    {
      title: "Email",
      value: "harshtul0502@gmail.com",
      icon: "📧",
      description:
        "Feel free to contact me anytime for project discussions, freelance work, or collaborations.",
    },
    {
      title: "Phone",
      value: "+91 8238404425",
      icon: "📱",
      description:
        "Available for direct communication regarding job opportunities and project work.",
    },
    {
      title: "Location",
      value: "Ahmedabad, Gujarat, India",
      icon: "📍",
      description:
        "Currently based in Ahmedabad and open for both remote and on-site opportunities.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white px-8 py-20">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-cyan-400 mb-4">
          Get In Touch
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          I’m always excited to connect with new people, discuss creative ideas,
          and explore opportunities in web development and design.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {contactInfo.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          >
            <div className="text-4xl mb-4">{item.icon}</div>

            <h2 className="text-2xl font-bold mb-3">{item.title}</h2>

            <p className="text-cyan-400 text-lg mb-4">{item.value}</p>

            <p className="text-gray-400 leading-7">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Availability Section */}
      <div className="bg-gray-800 p-10 rounded-2xl shadow-lg text-center mb-20">
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">
          Availability
        </h2>

        <p className="text-gray-300 text-lg leading-8 max-w-3xl mx-auto">
          I am currently available for freelance projects, internships, and
          frontend development opportunities. If you have an exciting idea or
          project, feel free to reach out and let's build something great together.
        </p>
      </div>

      {/* Social Links */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          Connect With Me
        </h2>

        <div className="flex justify-center gap-8 text-4xl">
          <a href="#" className="hover:text-cyan-400 transition duration-300">
            💻
          </a>

          <a href="#" className="hover:text-cyan-400 transition duration-300">
            🔗
          </a>

          <a href="#" className="hover:text-cyan-400 transition duration-300">
            📷
          </a>

          <a href="#" className="hover:text-cyan-400 transition duration-300">
            🐦
          </a>
        </div>

        <p className="text-gray-400 mt-6">
          You can connect with me through social media and professional platforms.
        </p>
      </div>
    </div>
  );
}

export default Contact;