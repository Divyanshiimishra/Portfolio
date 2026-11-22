const experience = [
  {
    role: "Web Development Intern",
    company: "CodeArrest Softwares Pvt. Ltd.",
    period: "May 2026 – July 2026",
    points: [
      "Learned core concepts of web application development.",
      "Implemented basic application functionality.",
    ],
  },
  {
    role: "WordPress Development Intern",
    company: "CodeArrest Softwares Pvt. Ltd.",
    period: "June 2025 – August 2025",
    points: [
      "Built and customized responsive WordPress websites using Elementor, Gutenberg and plugins.",
      "Optimized performance and resolved theme and plugin issues.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-soft py-16 md:py-20 px-5 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-ink mb-8">
          My <span className="text-accent">Experience</span>
        </h2>
        <div className="space-y-8">
          {experience.map((e) => (
            <div key={e.role + e.period} className="border-l-4 border-accent pl-5">
              <h3 className="text-xl font-semibold text-ink">{e.role}</h3>
              <p className="text-muted">
                {e.company} · {e.period}
              </p>
              <ul className="list-disc ml-5 mt-2 text-muted space-y-1">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}