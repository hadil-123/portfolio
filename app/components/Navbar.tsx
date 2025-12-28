export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-semibold tracking-tight">
          Hadil
        </a>

        <div className="flex items-center gap-6 text-sm text-gray-700">
          <a className="hover:text-gray-900" href="#about">About</a>
          <a className="hover:text-gray-900" href="#projects">Projects</a>
          <a className="hover:text-gray-900" href="#skills">Skills</a>
          <a className="hover:text-gray-900" href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
