export default function ProjectCard({ titre, description, technologie, link }: { titre: string; description: string; technologie: string; link: string }) {
  return (
    <div className="bg-gradient-to-br from-blue-900/50 to-gray-900/30 border border-blue-800 rounded-2xl p-6 shadow-xl backdrop-blur-md hover:scale-105 transition-transform">
      <h4 className="text-xl font-semibold mb-2">{titre}</h4>
      <p className="text-gray-400 text-sm mb-2">{technologie}</p>
      <p className="text-white/80 text-sm mb-4">{description}</p>
      <a href={link} className="text-blue-400 hover:underline">Voir le projet →</a>
    </div>
  );
}