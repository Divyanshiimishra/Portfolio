export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 px-5 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-ink mb-6">
          About <span className="text-accent">Me</span>
        </h2>
        <p className="text-muted text-base sm:text-lg leading-relaxed">
          I'm a Computer Science and Engineering student at Govt. Mahila Engineering
          College, Ajmer, who loves building full-stack web applications. I work with
          Next.js, Tailwind CSS and Supabase, and I enjoy adding AI features, like
          using the Gemini API to verify photos in CleanKart. I've taken part in
          multiple national-level hackathons and organized college events as an
          Executive Member of the Soft Skills Club.
        </p>
      </div>
    </section>
  );
}