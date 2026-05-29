export default function PartnerLogos() {
  const partners = [
    "/logos/eastern-power.svg",
    "/logos/polycab.svg",
    "/logos/premier.svg",
    "/logos/renewal-energy.svg",
  ];

  return (
    <section className="py-16 border-y border-neutral-100 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm uppercase tracking-widest text-neutral-400 mb-10">
          Trusted Components & Industry Brands
        </p>

        <div className="relative">
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
          {partners.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Partner"
              className="h-10 object-contain hover:opacity-100 transition"
            />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
