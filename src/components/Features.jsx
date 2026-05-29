import {
  ShieldCheck,
  Wrench,
  Zap,
  BadgeIndianRupee,
  Sun,
  Leaf,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Sun size={32} />,
      title: "25+ Years Solar Performance",
      description:
        "Long-lasting solar systems designed for decades of clean energy generation.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Government Subsidy Support",
      description:
        "Complete assistance with PM Surya Ghar subsidy applications and approvals.",
    },
    {
      icon: <Wrench size={32} />,
      title: "Professional Installation",
      description:
        "Expert technicians ensure safe and efficient rooftop installation.",
    },
    {
      icon: <Zap size={32} />,
      title: "Lower Electricity Bills",
      description:
        "Reduce monthly electricity costs by up to 80% with solar energy.",
    },
    {
      icon: <BadgeIndianRupee size={32} />,
      title: "High Return On Investment",
      description:
        "Recover installation costs quickly while enjoying long-term savings.",
    },
    {
      icon: <Leaf size={32} />,
      title: "Clean & Sustainable Energy",
      description:
        "Reduce carbon footprint while generating your own electricity.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#F5B700] font-semibold uppercase tracking-wider">
            Why Solar Step Solutions
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Reliable Solar Solutions
          </h2>

          <p className="text-neutral-600 max-w-2xl mx-auto">
            We make solar simple, affordable, and accessible for homeowners
            across Andhra Pradesh and Telangana.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl border border-neutral-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#FFF6D7] rounded-2xl flex items-center justify-center text-[#F5B700] mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-4">{item.title}</h3>

              <p className="text-neutral-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
