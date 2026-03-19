import { biographyInfo } from "../data/info.js";

export default function Biography() {
  const { title, description, achievements, image } = biographyInfo;

  return (
    <section
      id="biografia"
      className="py-20 px-4 "
      style={{ backgroundColor: "var(--color-primary)", color: "white" }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 relative">
            <div
              className="absolute -inset-4 rounded-xl opacity-30 blur-lg"
              style={{ backgroundColor: "var(--color-accent)" }}
            ></div>
            <img
              src={image}
              alt="Biografía Electricista"
              className="relative w-full h-[400px] object-cover rounded-xl shadow-2xl"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2
                className="text-3xl md:text-5xl font-bold mb-6"
                style={{ color: "var(--color-secondary)" }}
              >
                {title}
              </h2>
              <p className="text-lg leading-relaxed opacity-90">
                {description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/20">
              {achievements.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h3
                    className="text-3xl font-extrabold"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-80 font-medium">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
