export default function Hero() {
  const stats = [
    { value: "8.35", label: "CGPA" },
    { value: "2", label: "Projects" },
    { value: "2", label: "Internships" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 pt-24 pb-12 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* text */}
        <div className="order-2 md:order-1 text-center md:text-left fade-in">
          <p className="text-indigo-400 mb-3 tracking-widest uppercase text-sm">
            Full-Stack Developer
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Hi, I'm <span className="text-indigo-400">Divyanshi</span> Mishra
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-lg mx-auto md:mx-0">
            B.Tech CSE student building web apps with Next.js, Supabase and AI.
          </p>

          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-7 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-medium transition"
            >
              View Projects
            </a>
            <a
  href="https://1drv.ms/b/c/0929d462e1441208/IQD9K3VzNIf1RKS8VfSWvAWTAQywJHn8e-KYAsvSzuXWY8o?e=crrVJh"
  target="_blank"
  className="px-7 py-3 rounded-lg border border-white/20 hover:bg-white/10 text-white transition"
>
  View Resume
</a>
          </div>

          <div className="mt-10 flex gap-8 justify-center md:justify-start">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-white">{s.value}</p>
                <p className="text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* photo */}
        <div className="order-1 md:order-2 flex justify-center fade-in">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 blur-2xl opacity-40" />
            <img
              src="/images/profile.png"
              alt="Divyanshi Mishra"
              className="relative w-60 h-60 md:w-80 md:h-80 rounded-full object-cover border-4 border-indigo-400/60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}