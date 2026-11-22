const skills = [
  { category: "Languages", items: ["C++", "JavaScript", "Python"] },
  { category: "Frontend", items: ["HTML", "CSS", "React.js", "Next.js", "Tailwind CSS"] },
  { category: "Databases", items: ["SQL", "PostgreSQL", "Supabase"] },
  { category: "Tools", items: ["Figma", "WordPress"] },
  { category: "AI", items: ["Google Gemini API", "AI-assisted Development"] },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-soft py-16 md:py-20 px-5 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-ink mb-8">
          My <span className="text-accent">Skills</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {skills.map((s) => (
            <div key={s.category} className="bg-surface border border-line rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-ink mb-3">{s.category}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span key={i} className="text-sm px-3 py-1 rounded-full bg-accent-soft text-accent">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}