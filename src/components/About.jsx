import aboutImage from "../assets/about.png";

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <img
            src={aboutImage}
            alt="Solar Team"
            className="
            rounded-[40px]
            object-cover
            h-137.5
            w-full
            "
          />

          <div>
            <span className="text-[#F5B700] font-semibold uppercase">
              About Us
            </span>

            <h2 className="text-3xl sm:text-5xl font-bold mt-4 mb-6">
              Helping Homes Generate Their Own Power
            </h2>

            <p className="text-neutral-600 sm:text-lg mb-8">
              Solar Step Solutions helps homeowners across Andhra Pradesh and
              Telangana install premium rooftop solar systems with complete
              subsidy support.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 sm:p-6 bg-[#F8F4ED] rounded-3xl">
                <h3 className="text-3xl font-bold text-[#F5B700]">200+</h3>

                <p>Projects Completed</p>
              </div>

              <div className="p-4 sm:p-6 bg-[#F8F4ED] rounded-3xl">
                <h3 className="text-3xl font-bold text-[#F5B700]">80%</h3>

                <p>Average Savings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
