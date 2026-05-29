import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    "Home",
    "Services",
    "Calculator",
    "Projects",
    "FAQ",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 justify-between">
            {/* <div className="w-10 h-10 bg-[#F5B700] rounded-xl flex items-center justify-center font-bold">
              SS
            </div> */}
            <div className="h-16 w-16">
              <img
                src="./logos/solar-step-solution-logo.png"
                alt=""
              />
            </div>

            <div>
              <h1 className="font-semibold text-lg">Solar Step Solutions</h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-neutral-600 hover:text-[#F5B700] transition"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:flex bg-[#F5B700] hover:bg-[#e0a600] transition px-5 py-3 rounded-full font-medium"
          >
            Get Free Quote
          </a>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}

            <a
              href="#contact"
              className="bg-[#F5B700] text-center py-3 rounded-full font-semibold"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
