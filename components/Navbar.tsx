export default function Navbar() {
  const links = ["about", "skills", "projects", "experience", "contact"];

  return (
    <nav className="fixed top-0 w-full bg-[#0b0f19]/90 backdrop-blur border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="#home" className="text-xl font-bold text-white">
          Divyanshi<span className="text-indigo-400">.</span>
        </a>
        <div className="flex gap-4 sm:gap-6">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              className="capitalize text-sm sm:text-base text-gray-200 hover:text-indigo-400 transition"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}