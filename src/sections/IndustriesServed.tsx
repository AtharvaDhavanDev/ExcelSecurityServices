
const industries = [
  { number: "01", name: "Corporate Offices", detail: "Corporate establishments & workplaces" },
  { number: "02", name: "Banks & ATMs", detail: "Banking facilities & ATM locations" },
  { number: "03", name: "Residential Societies", detail: "Housing societies & residential communities" },
  { number: "04", name: "Hospitals", detail: "Healthcare & medical establishments" },
  { number: "05", name: "Schools", detail: "Educational institutions & campuses" },
  { number: "06", name: "Accommodation", detail: "Accommodation & lodging facilities" },
  { number: "07", name: "Administrative Offices", detail: "Administrative & office premises" },
  { number: "08", name: "Organisations", detail: "Various organisations & establishments" },
];

export default function IndustriesServed() {
  return (
    <section
      id="industries"
      className="bg-[#F8F8F6] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Section header */}
        <div className="flex items-center justify-between border-b border-[#D9D9D4] pb-5">
          <span className="text-sm font-semibold tracking-[0.12em] text-[#14243A] uppercase">
            Industries We Serve
          </span>

          <span className="text-xs tracking-wider text-gray-500">
            08 SECTORS
          </span>
        </div>

        {/* Heading */}
        <div className="grid grid-cols-1 gap-8 py-16 md:grid-cols-2 md:py-20">
          <h2 className="max-w-xl text-4xl font-semibold leading-[1.2] tracking-tight text-[#14243A] md:text-6xl">
            Security across
            <span className="text-[#A47D36]"> diverse environments.</span>
          </h2>

          <div className="flex items-end md:pl-16">
            <p className="max-w-md text-base leading-8 text-[#656565]">
              From workplaces and financial facilities to
              residential communities and institutions,
              our security guards serve across a range
              of establishments.
            </p>
          </div>
        </div>

        {/* Industry grid */}
        <div className="grid grid-cols-1 border-t border-[#D9D9D4] sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <div
              key={industry.number}
              className={`group relative min-h-[190px] border-b border-[#D9D9D4] p-6 transition-colors duration-200 hover:bg-white sm:border-r sm:nth-last-child(-n+2):border-r-0 lg:border-r lg:nth-last-child(-n+4):border-r-0 ${
                index % 4 === 0 ? "lg:pl-0" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-[#A47D36]">
                  {industry.number}
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-[#D9D9D4] transition-colors duration-200 group-hover:bg-[#A47D36]" />
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold leading-snug tracking-tight text-[#14243A]">
                  {industry.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#777777]">
                  {industry.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div className="flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            Different environments. A shared need for security.
          </p>

          <p className="text-xs font-medium tracking-[0.12em] text-[#14243A] uppercase">
            Excel Security Services
          </p>
        </div>

      </div>
    </section>
  );
}
