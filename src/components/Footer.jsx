// import { Instagram, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaPhone, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Solar Step Solutions</h3>

            <p className="text-neutral-400">
              Helping homeowners across Andhra Pradesh and Telangana switch to
              affordable rooftop solar energy.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-5">Services</h4>

            <ul className="space-y-3 text-neutral-400">
              <li>Residential Solar</li>
              <li>Subsidy Support</li>
              <li>Net Metering</li>
              <li>Maintenance</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5">Quick Links</h4>

            <ul className="space-y-3 text-neutral-400">
              <li>About</li>
              <li>Calculator</li>
              <li>Projects</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5">Contact</h4>

            <div className="space-y-4 text-neutral-400">
              <div className="flex items-center gap-3">
                <FaPhoneAlt size={18} />
                <span>+91 93922 21028</span>
              </div>

              <div className="flex gap-4 pt-2">
                <a
                  href="https://instagram.com/solar_steps_solutions"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://facebook.com/GnanaprasanthKolä"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-16 pt-8 flex flex-col md:flex-row justify-between gap-4 text-neutral-500 text-sm">
          <p>© {new Date().getFullYear()} Solar Step Solutions.</p>

          <p>Powering Homes, Preserving Tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}
