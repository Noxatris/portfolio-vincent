'use client'

import { useState, useEffect } from 'react'
// @ts-ignore
import AOS from 'aos'
import ParticlesBackground from './(components)/ParticlesBackground'

import projectData from '../data/projetListe.json'
import ProjectCard from './(components)/ProjectCard'

import StackCard from './(components)/StackCard'

import ContactForm from './(components)/ContactForm'

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
    })
  }, [])

  const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 1080
  const progress = scrollY / screenHeight
  const opacityA = Math.max(0, 1 - progress)
  const opacityB = Math.max(0, 1 - Math.abs(progress - 1))
  const opacityC = Math.max(0, progress - 1)

  return (
    <main className="relative font-sans text-white min-h-screen overflow-x-hidden">
      {/* Background Layers */}
      <div
        className="fixed top-0 left-0 w-full h-screen overflow-hidden pointer-events-none transition-opacity duration-500"
        style={{ opacity: opacityA }}
      >
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

      <div
        className="fixed top-0 left-0 w-full h-screen bg-cover bg-center pointer-events-none transition-opacity duration-500"
        style={{
          backgroundImage: "url('/mer-colored.webp')",
          opacity: opacityB,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div
        className="fixed top-0 left-0 w-full h-screen bg-cover bg-center pointer-events-none transition-opacity duration-500"
        style={{ backgroundImage: "url('/mer-abyss.webp')", opacity: opacityC }}
      />

      {/* Landing Section */}
      <section className="h-screen flex flex-col justify-start items-center relative z-10 px-4 text-center pt-5">
        <div
          className="xl:self-start w-[75%] xl:w-[8%]"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <img src="/logo.png" alt="Logo Noxatris.dev" />
        </div>
        <h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-16 pt-[200px]"
          data-aos="fade-down"
        >
          Noxatris.dev
        </h1>
        <p
          className="text-xl md:text-2xl text-white/80 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Développeur full-stack autodidacte, je conçois des expériences web
          allant de sites immersifs narratifs à des plateformes complexes avec
          API et base de données.
        </p>
        <button
          onClick={() =>
            window.scrollTo({ top: screenHeight, behavior: 'smooth' })
          }
          className="mt-16 text-white text-4xl animate-bounce"
          aria-label="Scroll to next section"
        >
          ↓
        </button>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative text-white min-h-screen flex flex-col items-center justify-center px-4 py-20 z-10 bg-black/30"
      >
        <div className="max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">
            À propos
          </h2>
          <p
            className="text-white/80 text-lg leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Développeur full-stack autodidacte, je code depuis plusieurs années des projets à la croisée de la technique et de la narration. Passionné par les interfaces immersives et les systèmes bien structurés, je conçois des expériences web allant de sites narratifs dynamiques à des applications full-stack avec API, base de données PostgreSQL, ou encore PWA.
          </p>
          <p
            className="text-white/70 text-lg mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Mon objectif : créer des univers numériques fonctionnels, esthétiques et intuitifs — qu’il s’agisse de valoriser une idée, une œuvre ou une entreprise.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative text-white min-h-screen flex flex-col items-center justify-center px-4 py-20 z-10"
      >
        <ParticlesBackground />
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">
            Projets immergés
          </h2>
          <p className="mb-8 text-white/80" data-aos="fade-up" data-aos-delay="200">
            Sites narratifs, plateformes interactives, back-office PWA… Chaque projet est pensé comme un univers cohérent, aussi fonctionnel qu’immersif.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projectData.map((project, index) => (
              <div
                key={index}
                data-aos="zoom-in-up"
                data-aos-delay={index * 150}
              >
                <ProjectCard
                  titre={project.titre}
                  description={project.description}
                  technologie={project.technologie}
                  link={project.link}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section
        id="technologies"
        className="relative text-white min-h-screen flex flex-col items-center justify-center px-4 py-20 z-10"
      >
        <ParticlesBackground />
        <div className="max-w-5xl text-center">
          <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">
            Stack & Compétences
          </h2>
          <p
            className="mb-12 text-white/80 max-w-xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Une boîte à outils affûtée pour concevoir des interfaces dynamiques,
            connectées et évolutives.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {[
              'React',
              'Next.js',
              'Tailwind CSS',
              'TypeScript',
              'Node.js',
              'Socket.IO',
              'PostgreSQL',
              'Prisma',
              'MongoDB',
              'Git & GitHub',
            ].map((tech, i) => (
              <div
                key={tech}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <StackCard nom={tech} link={tech.toLowerCase()} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative text-white min-h-screen flex flex-col items-center justify-center px-4 py-20 z-10"
      >
        <div className="max-w-3xl w-full z-10 text-center">
          <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">
            Restons en contact
          </h2>
          <p
            className="mb-10 text-white/70"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Une idée, un besoin ou une envie d&apos;explorer ensemble un projet ?
          </p>
          <div data-aos="zoom-in" data-aos-delay="400">
            <ContactForm />
          </div>

          <div
            className="mt-12 flex justify-center gap-8"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <a
              href="https://github.com/Noxatris"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-white hover:text-blue-400 transition-colors"
            >
              <img
                src="/icons/git & github.svg"
                alt="GitHub"
                className="w-10 h-10 mb-2"
              />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-center text-white py-8 border-t border-blue-900 z-10 relative">
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} Noxatris — Créateur d&apos; expériences
          numériques sur mesure.
        </p>
      </footer>
    </main>
  )
}
