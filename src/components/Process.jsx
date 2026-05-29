import { ClipboardCheck, Ruler, Hammer, BatteryCharging } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: <ClipboardCheck size={28} />,
      title: "Site Inspection",
      description:
        "Our experts visit your home and assess your rooftop requirements.",
    },
    {
      icon: <Ruler size={28} />,
      title: "Custom Design",
      description:
        "We design a solar system based on your electricity consumption.",
    },
    {
      icon: <Hammer size={28} />,
      title: "Installation",
      description: "Professional installation using premium solar components.",
    },
    {
      icon: <BatteryCharging size={28} />,
      title: "Start Saving",
      description: "Generate your own electricity and reduce monthly bills.",
    },
  ];

  return (
    <section className="py-24 bg-[#F8F4ED]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#F5B700] font-semibold uppercase tracking-wider">
            How It Works
          </span>

          <h2 className=" text-4xl sm:text-5xl font-bold mt-4 mb-6">Simple Solar Journey</h2>

          <p className="text-neutral-600 max-w-2xl mx-auto">
            From consultation to installation, we manage everything for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 text-center relative"
            >
              <div className="w-16 h-16 rounded-full bg-[#FFF6D7] flex items-center justify-center mx-auto mb-6 text-[#F5B700]">
                {step.icon}
              </div>

              <span className="absolute top-5 right-5 text-neutral-200 text-4xl font-black">
                0{index + 1}
              </span>

              <h3 className="font-semibold text-xl mb-4">{step.title}</h3>

              <p className="text-neutral-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
