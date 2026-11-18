
export default function AboutUs() {
  return (
    <section
      id="about"
      className="bg-white py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Section heading */}
        <div className="flex items-center justify-between border-b border-[#D9D9D4] pb-5">
          <span className="text-sm font-semibold tracking-[0.12em] text-[#14243A] uppercase">
            About Us
          </span>

          <span className="text-xs tracking-wider text-gray-500">
            OUR STORY — EST. 2008
          </span>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 md:items-center md:gap-20 md:py-24">

          {/* Founder photograph */}
          <div>
            <div className="overflow-hidden bg-[#F1F1EE]">
              <img
                src="/images/kiran-dhawan.png"
                alt="Kiran Dhawan, Founder of Excel Security Services"
                className="aspect-[4/5] w-full object-cover object-center"
              />
            </div>

            <div className="mt-5 border-l-2 border-[#A47D36] pl-4">
              <h3 className="text-lg font-semibold text-[#14243A]">
                Kiran Dhawan
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Founder, Excel Security Services
              </p>
            </div>
          </div>

          {/* Company story */}
          <div>
            <p className="mb-6 text-sm font-semibold tracking-[0.15em] text-[#A47D36] uppercase">
              Experience. Discipline. Responsibility.
            </p>

            <h2 className="text-4xl font-semibold leading-[1.2] tracking-tight text-[#14243A] md:text-5xl">
              Built on experience.
              <span className="text-[#A47D36]">
                {" "}Driven by responsibility.
              </span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-[#626262]">
              <p>
                Established in 2008 by Kiran Dhawan,
                Excel Security Services provides security
                guard services to businesses, institutions
                and residential establishments.
              </p>

              <p>
                With a background as a former police officer,
                Kiran Dhawan brings his experience in law
                enforcement to the security services industry.
              </p>

              <p>
                Today, Excel Security Services has a workforce
                of over 300 security guards, serving clients
                across Dombivli and surrounding areas.
              </p>
            </div>

            {/* Statistics */}
            <div className="mt-12 grid grid-cols-2 border-t border-[#D9D9D4] pt-8">
              <div>
                <p className="text-4xl font-semibold tracking-tight text-[#14243A] md:text-5xl">
                  2008
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Year Established
                </p>
              </div>

              <div className="border-l border-[#D9D9D4] pl-8">
                <p className="text-4xl font-semibold tracking-tight text-[#14243A] md:text-5xl">
                  300+
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Security Guards
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="border-t border-[#D9D9D4] pt-8">
          <p className="max-w-3xl text-xl font-medium leading-relaxed text-[#14243A] md:text-2xl">
            Providing security services with a commitment
            to discipline, responsibility and reliability.
          </p>
        </div>

      </div>
    </section>
  );
}
