import heroImage from "../assets/hero-solar.png";

export default function Hero() {
  return (
    <section id="home" className="pt-30 bg-[#F8F4ED]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center text-xs sm:text-md bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
              🟢 Government Subsidy Support Available
            </div>

            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold  mb-6">
              Turn Your Roof Into Your Own{" "}
              <span className="text-[#F5B700]">Power Plant</span>
            </h1>

            <p className="sm:text-lg text-neutral-600 mb-8 max-w-xl">
              High-quality rooftop solar systems with government subsidy support
              for homes across Andhra Pradesh and Telangana.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#contact"
                className="bg-[#F5B700] px-7 py-4 rounded-full font-semibold hover:bg-[#e0a600] transition"
              >
                Get Free Consultation
              </a>

              <a
                href="tel:9392221028"
                className="border border-[#F5B700] px-7 py-4 rounded-full font-semibold hover:bg-[#fff6d7]"
              >
                Call Now
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 border-t pt-8">
              <div>
                <h4 className="font-semibold">Quality Materials</h4>

                <p className="text-sm text-neutral-500">Premium Components</p>
              </div>

              <div>
                <h4 className="font-semibold">Expert Installation</h4>

                <p className="text-sm text-neutral-500">Professional Team</p>
              </div>

              <div>
                <h4 className="font-semibold">Subsidy Support</h4>

                <p className="text-sm text-neutral-500">Complete Assistance</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              alt="Solar Installation"
              className="rounded-[40px] object-cover h-120 sm:h-162.5 w-full"
            />

            <div className="absolute bottom-8 left-8 bg-white rounded-3xl p-3 sm:p-6 shadow-xl">
              <p className="text-sm text-neutral-500">Average Savings</p>

              <h3 className=" sm:text-3xl font-bold">Up To 80%</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
