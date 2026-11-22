export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">
        Get in <span className="text-indigo-400">Touch</span>
      </h2>
      <p className="text-gray-300 mb-8">Open to internships and collaborations.</p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="mailto:kiamishra6804@gmail.com"
          className="px-6 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white transition"
        >
          Email Me
        </a>
        <a
          href="https://github.com/Divyanshiimishra"
          target="_blank"
          className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/divyanshi-mishra-bab8aa294/"
          target="_blank"
          className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}