export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 px-5 sm:px-6 text-center">
      <h2 className="text-3xl font-bold text-ink mb-4">
        Get in <span className="text-accent">Touch</span>
      </h2>
      <p className="text-muted mb-8">Open to internships and collaborations.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
        <a href="mailto:kiamishra6804@gmail.com" className="px-6 py-3 rounded-lg bg-accent text-white hover:opacity-90 transition">
          Email Me
        </a>
        <a href="https://github.com/Divyanshiimishra" target="_blank" className="px-6 py-3 rounded-lg border border-accent text-accent hover:bg-accent-soft transition">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/divyanshi-mishra-bab8aa294/" target="_blank" className="px-6 py-3 rounded-lg border border-accent text-accent hover:bg-accent-soft transition">
          LinkedIn
        </a>
      </div>
    </section>
  );
}