import { services, heroInfo } from "../data/info.js";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-24 bg-gray-50"
      style={{ color: "var(--color-primary)" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            Mis Servicios
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded"
            style={{ backgroundColor: "var(--color-secondary)" }}
          ></div>
          <p className="mt-6 text-xl text-gray-600">
            Soluciones eléctricas completas para tu hogar, negocio o industria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              whatsappNumber={heroInfo.whatsappNumber} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
