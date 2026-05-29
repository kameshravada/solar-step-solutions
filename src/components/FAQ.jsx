import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "How much subsidy can I get?",
      answer:
        "Depending on the system size and government policies, eligible homeowners can receive up to ₹78,000 subsidy.",
    },
    {
      question: "How much can I save monthly?",
      answer:
        "Most homeowners save between 60% and 80% on electricity bills after installing solar.",
    },
    {
      question: "How long does installation take?",
      answer:
        "Typically 3-7 working days after site approval and documentation.",
    },
    {
      question: "Do solar panels work during cloudy weather?",
      answer:
        "Yes, they still generate electricity, though output may be lower.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#F5B700] font-semibold uppercase">FAQ</span>

          <h2 className="text-5xl font-bold mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-3xl overflow-hidden">
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-semibold">{faq.question}</span>

                <ChevronDown
                  className={`transition ${open === index ? "rotate-180" : ""}`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-neutral-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
