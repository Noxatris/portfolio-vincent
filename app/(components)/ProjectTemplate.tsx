'use client';
import { useState } from 'react';
import ParticlesBackground from '../(components)/ParticlesBackground';

// eslint-disable-next-line
export default function ProjectTemplate({ project }: { project: any }) {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <main
      className="relative font-sans text-white min-h-screen bg-black overflow-x-hidden bg-cover bg-center xl:bg-top shadow-inset"
      style={{ backgroundImage: `url(/bgProjet/${project.cover})` }}
    >
      <ParticlesBackground />

      {/* Titre + Description */}
      <section className="relative z-10 pt-32 pb-16 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">{project.title}</h1>
        <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">{project.description}</p>
      </section>

      {/* Stack Technique & Fonctionnalités */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
        <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Stack technique</h2>
          <ul className="space-y-2 list-disc list-inside text-white/90">
            {project.stack.map((tech: string, i: number) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Fonctionnalités</h2>
          <ul className="space-y-2 list-disc list-inside text-white/90">
            {project.features.map((f: string, i: number) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Aperçus Visuels avec Lightbox au clic */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-white/90">Aperçus visuels</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.images.map((img: string, i: number) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={() => setLightboxImg(img)}
              aria-label={`Agrandir aperçu ${i}`}
              role="button"
              tabIndex={0}
              onKeyDown={e => { if(e.key === 'Enter' || e.key === ' ') setLightboxImg(img); }}
            >
              <img
                src={img}
                alt={`Aperçu ${i}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox full screen */}
      {lightboxImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={() => setLightboxImg(null)}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={lightboxImg}
            alt="Aperçu agrandi"
            className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl object-contain"
          />
        </div>
      )}

      {/* Lien vers le projet */}
      <section className="relative z-10 py-16 text-center">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-700 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition"
        >
          Voir le projet en ligne
        </a>
      </section>
    </main>
  );
}
