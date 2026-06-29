function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white px-6 md:px-12 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-[90vh]">

        <div>
          <p className="text-cyan-400 text-lg mb-4 tracking-wider">
            FRONTEND DEVELOPER
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
            Building Digital <br />
            <span className="text-cyan-400">Experiences</span>
          </h1>

          <p className="text-gray-300 text-lg leading-8 mb-8 max-w-xl">
            Hello, I'm Harsh — a passionate frontend developer specializing in
            creating responsive, interactive, and visually attractive web applications.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-cyan-500 rounded-xl hover:bg-cyan-600 transition">
              View Projects
            </button>

            <button className="px-8 py-4 border border-cyan-400 rounded-xl hover:bg-cyan-500 transition">
              Contact Me
            </button>
          </div>

          <div className="flex gap-8 mt-10 text-gray-400">
            <div>
              <h2 className="text-3xl font-bold text-cyan-400">10+</h2>
              <p>Projects</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-cyan-400">1+</h2>
              <p>Experience</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            alt="profile"
            className="w-72 sm:w-96 rounded-full border-4 border-cyan-400 shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;