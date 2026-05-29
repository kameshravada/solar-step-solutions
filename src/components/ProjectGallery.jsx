export default function ProjectGallery() {
  const images = [
    // "/projects/1.jpg",
    // "/projects/2.jpg",
    // "/projects/3.jpg",
    // "/projects/4.jpg",
    // "/projects/5.jpg",
    // "/projects/6.jpg",
  ];

  return (
    <section id="gallery" className="py-8 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#F5B700] font-semibold uppercase">
            Our Projects
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold mt-4">
            Solar Installations Across AP
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className="
              rounded-3xl
              h-80
              object-cover
              w-full
              hover:scale-105
              transition
              "
            />
          ))}
        </div>
      </div>
    </section>
  );
}
