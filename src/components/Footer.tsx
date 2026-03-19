import Logo from "./Logo";

export default function Footer() {
  return (
    <footer
      className="py-12"
      style={{ backgroundColor: "var(--color-primary)", color: "white" }}
    >
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div className="col-span-2">
          <Logo className="mb-4" />
          <p className="opacity-80 max-w-sm">
            Soluciones eléctricas profesionales para hogares y empresas.
            Garantía, seguridad y eficiencia en cada proyecto.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-lg">Enlaces Rápidos</h4>
          <ul className="space-y-2 opacity-80">
            <li>
              <a
                href="#inicio"
                className="hover:text-[var(--color-secondary)] transition-colors"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#biografia"
                className="hover:text-[var(--color-secondary)] transition-colors"
              >
                Sobre Mí
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                className="hover:text-[var(--color-secondary)] transition-colors"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#consulting"
                className="hover:text-[var(--color-secondary)] transition-colors"
              >
                Asesoría
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="hover:text-[var(--color-secondary)] transition-colors"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-lg">Contacto</h4>
          <ul className="space-y-2 opacity-80">
            <li>+51 973713437</li>
            <li>coralespv_2@hotmail.com</li>
            <li>Nuevo Chimbote, Perú</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
