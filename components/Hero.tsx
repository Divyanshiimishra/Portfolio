export default function Hero() {
  const stats = [
    { value: "8.35", label: "CGPA" },
    { value: "2", label: "Projects" },
    { value: "2", label: "Internships" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-5 sm:px-6 pt-24 pb-12 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute -top-24 -left-24 w-72 h-72 md:w-96 md:h-96 bg-accent-soft rounded-full blur-3xl opacity-80" />
      <div className="absolute bottom-0 -right-24 w-72 h-72 md:w-96 md:h-96 bg-soft rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* text */}
        <div className="order-2 md:order-1 text-center md:text-left fade-in">
          <p className="text-accent mb-3 tracking-widest uppercase text-sm">
            Full-Stack Developer
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink leading-tight">
            Hi, I'm <span className="text-accent">Divyanshi</span> Mishra
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted max-w-lg mx-auto md:mx-0">
            B.Tech CSE student building web apps with Next.js, Supabase and AI.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-7 py-3 rounded-lg bg-accent text-white font-medium hover:opacity-90 transition"
            >
              View Projects
            </a>
            <a
              href="https://1drv.ms/b/c/0929d462e1441208/IQD9K3VzNIf1RKS8VfSWvAWTAQywJHn8e-KYAsvSzuXWY8o?e=crrVJh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-lg border border-accent text-accent hover:bg-accent-soft transition"
            >
              View Resume
            </a>
          </div>

          <div className="mt-10 flex gap-8 justify-center md:justify-start">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-ink">{s.value}</p>
                <p className="text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* photo */}
        <div className="order-1 md:order-2 flex justify-center fade-in">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-accent-soft blur-2xl scale-110" />
            <img
              src="/images/profile.png"
              alt="Divyanshi Mishra"
              className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}