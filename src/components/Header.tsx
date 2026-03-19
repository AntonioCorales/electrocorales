import { heroInfo } from "../data/info.js";
import Logo from "./Logo";

export default function Header() {
  const { whatsappNumber, whatsappMessage } = heroInfo;
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <a href="#inicio" aria-label="Inicio">
          <Logo />
        </a>

        <nav className="hidden md:flex gap-6 lg:gap-8">
          <a
            href="#inicio"
            className="text-white hover:text-[var(--color-secondary)] transition-colors font-medium"
          >
            Inicio
          </a>
          <a
            href="#biografia"
            className="text-white hover:text-[var(--color-secondary)] transition-colors font-medium"
          >
            Sobre Mí
          </a>
          <a
            href="#servicios"
            className="text-white hover:text-[var(--color-secondary)] transition-colors font-medium"
          >
            Servicios
          </a>
          <a
            href="#consulting"
            className="text-white hover:text-[var(--color-secondary)] transition-colors font-medium"
          >
            Asesoría
          </a>
          <a
            href="#contacto"
            className="text-white hover:text-[var(--color-secondary)] transition-colors font-medium"
          >
            Contacto
          </a>
        </nav>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block px-6 py-2 rounded-full font-bold text-sm transition-transform hover:scale-105"
          style={{
            backgroundColor: "var(--color-secondary)",
            color: "var(--color-primary)",
          }}
        >
          COTIZAR
        </a>
      </div>
    </header>
  );
}
