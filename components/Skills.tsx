const skills = [
  { category: "Languages", items: ["C++", "JavaScript", "Python"] },
  { category: "Frontend", items: ["HTML", "CSS", "React.js", "Next.js", "Tailwind CSS"] },
  { category: "Databases", items: ["SQL", "PostgreSQL", "Supabase"] },
  { category: "Tools", items: ["Figma", "WordPress"] },
  { category: "AI", items: ["Google Gemini API", "AI-assisted Development"] },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white/[0.03] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">
          My <span className="text-indigo-400">Skills</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((s) => (
            <div
              key={s.category}
              className="border border-white/10 bg-white/5 rounded-xl p-5"
            >
              <h3 className="font-semibold text-white mb-3">{s.category}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300"
                  >
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