'use client'

import { useState, useEffect } from 'react';
import ParticlesBackground from './(components)/ParticlesBackground';

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 1080;
  const progress = scrollY / screenHeight;
  const opacityA = Math.max(0, 1 - progress);
  const opacityB = Math.max(0, 1 - Math.abs(progress - 1));
  const opacityC = Math.max(0, progress - 1);

  return (
    <main className="relative font-sans text-white min-h-screen overflow-x-hidden">
      {/* Background Layers */}
      {/* Background Video Layer */}
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden pointer-events-none transition-opacity duration-500" style={{ opacity: opacityA }}>
        <video
          src="/mer-landing.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="fixed top-0 left-0 w-full h-screen bg-cover bg-center pointer-events-none transition-opacity duration-500" style={{ backgroundImage: "url('/mer-colored.webp')", opacity: opacityB }}>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="fixed top-0 left-0 w-full h-screen bg-cover bg-center pointer-events-none transition-opacity duration-500" style={{ backgroundImage: "url('/mer-abyss.webp')", opacity: opacityC }} />

      {/* Landing Section */}
      <section className="h-screen flex flex-col justify-center items-center relative z-10 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">Noxatris</h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-2xl">
          Développeur full-stack passionné, explorant les abysses du code pour créer des expériences immersives et humaines.
        </p>
        <button
          onClick={() => window.scrollTo({ top: screenHeight, behavior: 'smooth' })}
          className="mt-16 text-white text-4xl animate-bounce"
          aria-label="Scroll to next section"
        >↓</button>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative text-white min-h-screen flex flex-col items-center justify-center px-4 py-20 z-10">
        <ParticlesBackground />
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Projets immergés</h2>
          <p className="mb-8 text-white/80">Découvrez quelques projets qui témoignent de ma passion et mon savoir-faire.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Project Cards */}
            {/* Les cartes actuelles sont bonnes, inchangées ici */}
            <div className="bg-gradient-to-br from-blue-900/50 to-gray-900/30 border border-blue-800 rounded-2xl p-6 shadow-xl backdrop-blur-md hover:scale-105 transition-transform">
              <h4 className="text-xl font-semibold mb-2">Site de Novel Magique</h4>
              <p className="text-white/80 text-sm mb-4">
                Un site interactif où chaque chapitre s'accompagne d'une ambiance sonore dynamique. Conçu pour immerger le lecteur dans un univers vivant.
              </p>
              <a href="#" className="text-blue-400 hover:underline">Voir le projet →</a>
            </div>
            <div className="bg-gradient-to-br from-blue-900/50 to-gray-900/30 border border-blue-800 rounded-2xl p-6 shadow-xl backdrop-blur-md hover:scale-105 transition-transform">
              <h4 className="text-xl font-semibold mb-2">Interface de JDR Genesys</h4>
              <p className="text-white/80 text-sm mb-4">
                Une interface socket.io pour maîtriser les jets, actions et PNJ d’une table Genesys en ligne. Ergonomique et réactive.
              </p>
              <a href="#" className="text-blue-400 hover:underline">Voir le projet →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="relative text-white min-h-screen flex flex-col items-center justify-center px-4 py-20 z-10">
        <ParticlesBackground />
        <div className="max-w-5xl text-center">
          <h2 className="text-4xl font-bold mb-6">Stack & Compétences</h2>
          <p className="mb-12 text-white/80 max-w-xl mx-auto">
            Une boîte à outils affûtée pour créer des interfaces fluides, dynamiques et robustes.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {/* Tech stack icons, inchangés sauf réorganisation visuelle */}
            {/* Bloc Techno */}
            <div className="flex flex-col items-center">
              <img src="/icons/react.svg" alt="React" className="w-12 h-12 mb-2" />
              <span className="text-white/90">React</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/nextjs.svg" alt="React" className="w-12 h-12 mb-2" />
              <span className="text-white/90">Next.js</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/tailwindcss.svg" alt="Tailwind CSS" className="w-12 h-12 mb-2" />
              <span className="text-white/90">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/typescript.svg" alt="TypeScript" className="w-12 h-12 mb-2" />
              <span className="text-white/90">TypeScript</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/nodejs.svg" alt="Node.js" className="w-12 h-12 mb-2" />
              <span className="text-white/90">Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/socketio.svg" alt="Socket.IO" className="w-12 h-12 mb-2" />
              <span className="text-white/90">Socket.IO</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/postgresql.svg" alt="Tailwind CSS" className="w-12 h-12 mb-2" />
              <span className="text-white/90">PostgreSQL</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/prisma.svg" alt="Prisma" className="w-12 h-12 mb-2" />
              <span className="text-white/90">Prisma</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/mongodb.svg" alt="MongoDB" className="w-12 h-12 mb-2" />
              <span className="text-white/90">MongoDB</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/github.svg" alt="Git" className="w-12 h-12 mb-2 " />
              <span className="text-white/90">Git & GitHub</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative text-white min-h-screen flex flex-col items-center justify-center px-4 py-20 z-10">
        <div className="max-w-3xl w-full z-10 text-center">
          <h2 className="text-4xl font-bold mb-6">Restons en contact</h2>
          <p className="mb-10 text-white/70">Vous avez une idée ou un projet à explorer ensemble ? Écrivez-moi.</p>
          <form action="https://formspree.io/f/tonCodeFormspree" method="POST" className="space-y-6">
            <input type="text" name="name" placeholder="Votre nom" required className="w-full p-4 rounded-xl bg-black/30 border border-blue-800 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input type="email" name="email" placeholder="Votre e-mail" required className="w-full p-4 rounded-xl bg-black/30 border border-blue-800 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <textarea name="message" placeholder="Votre message" rows={5} required className="w-full p-4 rounded-xl bg-black/30 border border-blue-800 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
            <button type="submit" className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors shadow-lg shadow-blue-800/20">
              Envoyer
            </button>
          </form>
          <div className="mt-12 flex justify-center gap-8">
            <a href="https://github.com/tonPseudo" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-white hover:text-blue-400 transition-colors">
              <img src="/icons/github.svg" alt="GitHub" className="w-10 h-10 mb-2" />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/tonProfil" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-white hover:text-blue-400 transition-colors">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-10 h-10 mb-2" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-center text-white py-8 border-t border-blue-900 z-10 relative">
        <p className="text-sm text-white/70">© {new Date().getFullYear()} Noxatris. Naviguant toujours plus profond.</p>
      </footer>
    </main>
  );
}
