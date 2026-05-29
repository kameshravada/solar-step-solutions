import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Santosh Rao",
      location: "Anakapalli",
      review:
        "Solar Step Solutions handled everything from installation to subsidy support. Very professional team.",
    },
    {
      name: "Ravi Kumar",
      location: "Visakhapatnam",
      review:
        "My electricity bill reduced drastically. The installation was completed on time.",
    },
    {
      name: "Lakshmi Devi",
      location: "Rajahmundry",
      review:
        "Highly recommended. Excellent customer support and quality materials.",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[#F8F4ED]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#F5B700] font-semibold uppercase">
            Testimonials
          </span>

          <h2 className="text-5xl font-bold mt-4">Trusted By Homeowners</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm">
              <div className="flex gap-1 text-[#F5B700] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-neutral-600 mb-6 leading-relaxed">
                "{item.review}"
              </p>

              <div>
                <h4 className="font-bold">{item.name}</h4>

                <p className="text-sm text-neutral-500">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
