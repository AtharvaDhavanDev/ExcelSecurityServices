
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "../../data/heroSlides";

const IMAGES_PER_SLIDE = 4;
const TOTAL_GROUPS = Math.ceil(heroSlides.length / 3);

const HeroSlider = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  const nextSlide = () => {
    setCurrentGroup((prev) => (prev + 1) % TOTAL_GROUPS);
    setMobileIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentGroup((prev) => (prev - 1 + TOTAL_GROUPS) % TOTAL_GROUPS);
    setMobileIndex(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  const visibleImages = Array.from(
    { length: IMAGES_PER_SLIDE },
    (_, index) =>
      heroSlides[(currentGroup * 3 + index) % heroSlides.length]
  );

  return (
    <section className="relative w-full overflow-hidden bg-[#101F33] p-0 md:p-5 lg:p-7">

      <div className="relative mx-auto max-w-[1800px]">

        {/* MOBILE: One photograph */}
        <div className="relative h-[350px] overflow-hidden md:hidden">
          <img
            key={heroSlides[mobileIndex].id}
            src={heroSlides[mobileIndex].image}
            alt={heroSlides[mobileIndex].alt}
            className="h-full w-full object-contain brightness-[0.96] contrast-[1.08] saturate-[0.9]"
            style={{
              objectPosition: heroSlides[mobileIndex].position,
            }}
          />

          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#101F33]/30 to-transparent" />

          {/* Mobile controls */}
          <button
            onClick={prevSlide}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-[#101F33]/80 p-2 text-white"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-[#101F33]/80 p-2 text-white"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* DESKTOP: Four-image collage */}
        <div className="hidden grid-cols-4 gap-0 md:grid">
          {visibleImages.map((slide) => (
            <div
              key={`${currentGroup}-${slide.id}`}
              className="group relative h-[320px] overflow-hidden border-r border-white/20 bg-[#17263A] last:border-r-0 lg:h-[440px]"
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="h-full w-full object-contain brightness-[0.96] contrast-[1.08] saturate-[0.9] transition-transform duration-700 group-hover:scale-[1.025]"
                style={{ objectPosition: slide.position }}
              />

              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#101F33]/25 via-transparent to-[#101F33]/10" />
              <div className="absolute bottom-0 left-0 h-[3px] w-12 bg-[#C69A42]" />
            </div>
          ))}

          <button
            onClick={prevSlide}
            aria-label="Previous collage"
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-[#101F33]/80 p-2 text-white transition hover:bg-[#C69A42]"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next collage"
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-[#101F33]/80 p-2 text-white transition hover:bg-[#C69A42]"
          >
            <ChevronRight size={22} />
          </button>
        </div>

      </div>

      {/* Mobile indicators */}
      <div className="flex justify-center gap-2 py-4 md:hidden">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setMobileIndex(index)}
            aria-label={`Show image ${index + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              mobileIndex === index
                ? "w-8 bg-[#C69A42]"
                : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Desktop indicators */}
      <div className="hidden justify-center gap-2 pt-4 md:flex">
        {Array.from({ length: TOTAL_GROUPS }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentGroup(index)}
            aria-label={`Show collage ${index + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              currentGroup === index
                ? "w-8 bg-[#C69A42]"
                : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default HeroSlider;
