export default function SubsidySection() {
  return (
    <section className="py-12 sm:py-24 bg-[#F8F4ED]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#F5B700] font-semibold uppercase">
            PM Surya Ghar Scheme
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold mt-4">Get Government Subsidy</h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {["Apply", "Verification", "Installation", "Receive Subsidy"].map(
            (step, index) => (
              <div
                key={index}
                className="
              bg-white
              rounded-3xl
              p-5 sm:p-8
              text-center
              "
              >
                <div
                  className="
                w-16
                h-16
                bg-[#FFF6D7]
                rounded-full
                mx-auto
                mb-6
                flex
                items-center
                justify-center
                font-bold
                text-[#F5B700]
              "
                >
                  {index + 1}
                </div>

                <h3 className="font-semibold text-xl">{step}</h3>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
