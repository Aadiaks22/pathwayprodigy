const Home = () => {
    return (
      <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/career-bg.avif')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center w-full max-w-4xl px-6 py-12 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg">
          <h1 className="text-5xl font-bold text-green-700 mb-6 leading-tight">Welcome to Pathway Prodigy</h1>
          <p className="text-2xl text-orange-600 mb-10">Your one-stop solution for Career Excellence</p>
          <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-full transition-colors duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </section>
    )
  }
  
  export default Home
  
  