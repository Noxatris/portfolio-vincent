export default function Landing() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#0f172a] to-[#1e293b] text-white">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        {/* Stars */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />

        {/* Waves */}
        <svg
          className="absolute bottom-0 w-full h-40 text-blue-900 opacity-30"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M0,160L48,165.3C96,171,192,181,288,176C384,171,480,149,576,138.7C672,128,768,128,864,122.7C960,117,1056,107,1152,128C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-wide mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-fade-in">
          Noxatris
        </h1>
        <p className="max-w-xl text-lg sm:text-xl text-gray-300 mb-8 animate-fade-in delay-200">
          Un simple développeur naviguant au gré des vagues de code, en quête d'aventures uniques.
        </p>
        <a
          href="#projects"
          className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg transition animate-fade-in delay-500"
        >
          Voir mes projets
        </a>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
}
