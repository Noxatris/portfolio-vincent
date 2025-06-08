export default function Hero() {
  return (
    <section className="relative h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex flex-col justify-center items-center text-center px-6  ">
      {/* Overlay légère pour du relief */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-10 pointer-events-none"></div>

      {/* Contenu principal */}
      <h1 className="text-white text-6xl font-extrabold drop-shadow-lg max-w-4xl mb-6">
        Transformez votre vision en réalité digitale
      </h1>

      <p className="text-blue-200 text-xl max-w-2xl mb-10 leading-relaxed drop-shadow-md">
        Développeur web passionné, je crée des expériences uniques, performantes et sur-mesure.
      </p>

      <a
        href="#projects"
        className="inline-block bg-white text-blue-900 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-300 transition duration-300"
      >
        Découvrez mes projets
      </a>
    </section>
  );
}