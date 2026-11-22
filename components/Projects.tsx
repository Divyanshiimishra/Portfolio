import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20 px-5 sm:px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-ink mb-6">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl overflow-hidden border border-line bg-surface shadow-sm hover:shadow-md hover:border-accent/50 transition"
          >
            {p.image ? (
              <img src={p.image} alt={p.title} className="w-full h-48 sm:h-56 object-cover" />
            ) : (
              <div className="h-48 sm:h-56 flex items-center justify-center bg-accent-soft text-3xl font-bold text-accent">
                {p.title}
              </div>
            )}
            <div className="p-5 sm:p-6">
              <h3 className="text-xl font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-muted">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t) => (
                  <span key={t} className="text-sm px-3 py-1 rounded-full bg-accent-soft text-accent">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-5 mt-6">
                <a href={p.live} target="_blank" className="text-accent font-medium hover:underline">
                  Live Preview →
                </a>
                <a href={p.github} target="_blank" className="text-muted hover:underline">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}