export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/6 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/35">
        <p className="font-bold text-base">
          <span className="text-[#00B4D8]">Joe</span> Coaching Lab
        </p>
        <p>© {new Date().getFullYear()} Joe Coaching Lab. Todos los derechos reservados.</p>
        <a
          href="#contacto"
          className="text-[#00B4D8] hover:text-[#90E0EF] font-semibold transition-colors"
        >
          Empieza tu plan →
        </a>
      </div>
    </footer>
  );
}
