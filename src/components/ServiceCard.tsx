"use client";

import { useState, useEffect } from "react";

type ServiceCardProps = {
  service: {
    id: string;
    title: string;
    description: string;
    image?: string;
    images?: string[];
    icon: string;
  };
  whatsappNumber: string;
};

export default function ServiceCard({ service, whatsappNumber }: ServiceCardProps) {
  const images = service.images || (service.image ? [service.image] : []);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [images.length]);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="h-56 overflow-hidden relative">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
        
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${service.title} - imagen ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div
          className="absolute top-4 right-4 z-20 w-12 h-12 flex items-center justify-center rounded-full text-2xl shadow-md"
          style={{
            backgroundColor: "var(--color-secondary)",
            color: "var(--color-primary)",
          }}
        >
          {service.icon}
        </div>
      </div>

      <div className="p-8 relative z-20 bg-white">
        <h3
          className="text-2xl font-bold mb-3"
          style={{ color: "var(--color-primary)" }}
        >
          {service.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {service.description}
        </p>
      </div>
      <div className="px-8 pb-8 relative z-20 bg-white">
        <a
          href={`https://wa.me/${whatsappNumber.replace(
            /\D/g,
            ""
          )}?text=${encodeURIComponent(
            "Quiero información sobre el servicio de " + service.title
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-bold hover:underline"
          style={{ color: "var(--color-accent)" }}
        >
          Saber más
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
