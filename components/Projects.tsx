import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6">
  Projects 
</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div key={p.title} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-indigo-400/50 transition">
            {p.image ? (
              <img src={p.image} alt={p.title} className="w-full h-56 object-cover" />
            ) : (
              <div className="h-56 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 text-3xl font-bold text-white">
                {p.title}
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-gray-400">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t) => (
                  <span key={t} className="text-sm px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300">{t}</span>
                ))}
              </div>
              <div className="flex gap-5 mt-6">
                <a href={p.live} target="_blank" className="text-indigo-400 hover:underline">Live Preview →</a>
                <a href={p.github} target="_blank" className="text-gray-300 hover:underline">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}