import { consultingInfo } from "../data/info.js";

export default function Consulting() {
  const { title, description, benefits, image } = consultingInfo;

  return (
    <section id="consulting" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 skew-y-3 origin-top-left -z-10 transform translate-y-20 h-full w-full"
        style={{ backgroundColor: "var(--color-primary)" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="lg:w-1/2 text-white">
            <div
              className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-6"
              style={{
                backgroundColor: "var(--color-secondary)",
                color: "var(--color-primary)",
              }}
            >
              NUEVO SERVICIO
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
              {title}
            </h2>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {description}
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span
                    className="mr-3 mt-1 text-xl"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    ✓
                  </span>
                  <span className="text-gray-200 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contacto"
              className="inline-block px-8 py-4 rounded-lg font-bold text-lg transition-transform hover:scale-105 shadow-lg bg-white text-gray-900 hover:bg-gray-100"
            >
              Solicitar Asesoría
            </a>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 opacity-20 blur-xl"></div>
            <img
              src={image}
              alt="Asesoría de Proyectos Eléctricos"
              className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px] border-4 border-gray-800"
            />

            {/* Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block max-w-xs">
              <p className="font-bold text-gray-900 text-lg mb-1">
                Optimización Garantizada
              </p>
              <p className="text-sm text-gray-600">
                Reduzco costos y aseguro el cumplimiento normativo de tu
                proyecto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
