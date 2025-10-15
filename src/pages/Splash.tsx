import { Link } from "react-router-dom";

const Splash = () => {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Textured blue background using gradients and subtle noise */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500 via-blue-600 to-blue-800" />
      <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\'><defs><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.9\\' numOctaves=\\'2\\' stitchTiles=\\'stitch\\'/></filter></defs><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23n)\\' opacity=\\'0.5\\'/></svg>')" }} />

      <div className="relative text-center px-6">
        <h1 className="font-[Poppins] text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
          Phish Guard
        </h1>
        <p className="mt-6 text-lg md:text-2xl opacity-95">ಕನ್ನಡ • हिन्दी • English</p>
        <div className="mt-10">
          <Link
            to="/detect"
            className="inline-flex items-center px-7 py-3 rounded-md bg-white text-blue-700 font-semibold hover:bg-blue-50 transition shadow"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Splash;


