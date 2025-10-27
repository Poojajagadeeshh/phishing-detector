import { Link } from "react-router-dom";

const Splash = () => {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Security-themed gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
      
      {/* Animated security pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-blue-400/30 rounded-full animate-pulse" />
        <div className="absolute top-20 right-20 w-24 h-24 border border-blue-300/40 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-20 w-40 h-40 border border-indigo-400/20 rounded-full animate-pulse delay-2000" />
        <div className="absolute bottom-10 right-10 w-28 h-28 border border-blue-500/30 rounded-full animate-pulse delay-500" />
      </div>

      {/* Floating security icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <i className="fas fa-shield-alt absolute top-1/4 left-1/4 text-blue-400/20 text-6xl animate-bounce delay-1000" />
        <i className="fas fa-lock absolute top-1/3 right-1/4 text-indigo-400/20 text-4xl animate-bounce delay-2000" />
        <i className="fas fa-eye absolute bottom-1/3 left-1/3 text-blue-300/20 text-5xl animate-bounce delay-3000" />
        <i className="fas fa-check-circle absolute bottom-1/4 right-1/3 text-green-400/20 text-3xl animate-bounce delay-500" />
      </div>

      <div className="relative text-center px-6 z-10">
        {/* Shield icon with title */}
        <div className="mb-8">
          <div className="relative inline-block mb-6">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center shadow-2xl animate-pulse">
              <i className="fas fa-eye text-white text-6xl md:text-7xl" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center animate-bounce">
              <i className="fas fa-check text-white text-lg md:text-xl" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-bounce delay-1000">
              <i className="fas fa-search text-white text-sm md:text-base" />
            </div>
          </div>
          <h1 className="font-[Poppins] text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-300 to-orange-300 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            Phish Guard
          </h1>
        </div>
        
        <p className="mt-6 text-lg md:text-2xl opacity-90 font-[Inter] font-medium">
          <i className="fas fa-globe mr-2" />
          ಕನ್ನಡ • हिन्दी • English
        </p>
        
        <p className="mt-4 text-sm md:text-base opacity-80 font-[Inter]">
          <i className="fas fa-shield-virus mr-2" />
          Advanced Phishing Detection & Protection
        </p>
        
        <div className="mt-12">
          <Link
            to="/detect"
            className="inline-flex items-center px-12 py-5 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-[Poppins] font-black text-xl hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-110 hover:-translate-y-1"
          >
            <i className="fas fa-search mr-4 text-2xl" />
            Start Detection
            <i className="fas fa-arrow-right ml-4 text-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Splash;


