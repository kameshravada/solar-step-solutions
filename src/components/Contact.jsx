import { Phone, MessageCircle, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-14 sm:py-24 bg-[#F5B700]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-semibold leading-tight mb-6">
              Ready To Go Solar?
            </h2>

            <p className="text-lg mb-10 max-w-lg">
              Talk to our solar experts and discover how much you can save every
              month.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <Phone />
                <span>+91 93922 21028</span>
              </div>

              <div className="flex gap-4 items-center">
                <MapPin />
                <span>Serving Andhra Pradesh & Telangana</span>
              </div>

              <a
                href="https://wa.me/919392221028"
                className="inline-flex items-center gap-3 bg-black text-white px-6 py-4 rounded-full mt-4"
              >
                <MessageCircle />
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="bg-white rounded-4xl p-8 shadow-xl">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-2xl px-5 py-4"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-2xl px-5 py-4"
              />

              <input
                type="text"
                placeholder="City"
                className="w-full border rounded-2xl px-5 py-4"
              />

              <textarea
                rows="5"
                placeholder="Tell us about your requirement"
                className="w-full border rounded-2xl px-5 py-4"
              />

              <button
                type="submit"
                className="w-full bg-[#F5B700] hover:bg-[#e0a600] py-4 rounded-2xl font-semibold"
              >
                Request Free Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
