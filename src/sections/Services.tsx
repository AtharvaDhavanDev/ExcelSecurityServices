
const services = [
  {
    number: "01",
    title: "Entry & Exit Monitoring",
    description:
      "Monitoring the movement of people entering and leaving the premises.",
  },
  {
    number: "02",
    title: "Visitor Management",
    description:
      "Managing visitor entry and maintaining records of visitors.",
  },
  {
    number: "03",
    title: "Premises Patrolling",
    description:
      "Conducting regular patrols throughout assigned premises.",
  },
  {
    number: "04",
    title: "Access Control",
    description:
      "Helping restrict access to designated areas to authorised individuals.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#F8F8F6] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Section label */}
        <div className="flex items-center justify-between border-b border-[#D9D9D4] pb-5">
          <span className="text-xs font-medium tracking-[0.18em] text-[#A47D36] uppercase">
            Our Services
          </span>

          <span className="text-xs tracking-wider text-gray-400">
            EST. 2008 — DOMBIVLI
          </span>
        </div>

        {/* Introduction */}
        <div className="grid grid-cols-1 gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h2 className="max-w-xl text-4xl font-semibold leading-[1.2] tracking-tight text-[#14243A] md:text-6xl">
              Security is not just a service.
              <span className="text-[#A47D36]">
                {" "}It's a responsibility.
              </span>
            </h2>
          </div>

          <div className="flex flex-col justify-end md:pl-16">
            <p className="max-w-md text-base leading-8 text-[#656565]">
              Excel Security Services provides security guards
              directly at client premises, supporting the everyday
              security requirements of businesses, institutions
              and residential establishments.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#A47D36]" />

              <span className="text-xs font-medium tracking-[0.15em] text-[#14243A] uppercase">
                Security Guard Deployment
              </span>
            </div>
          </div>
        </div>

        {/* Services list */}
        <div className="border-t border-[#D9D9D4]">

          {/* Table heading */}
          <div className="grid grid-cols-1 gap-2 border-b border-[#D9D9D4] py-6 md:grid-cols-[80px_1.2fr_1fr] md:items-center md:gap-8">
            <p className="text-sm font-semibold tracking-[0.12em] text-[#14243A] uppercase md:col-span-2">
              Areas of Responsibility
            </p>

            <p className="text-sm font-semibold tracking-[0.12em] text-[#14243A] uppercase md:col-start-3">
              What our guards do
            </p>
          </div>

          {/* Individual services */}
          {services.map((service) => (
            <div
              key={service.number}
              className="group grid grid-cols-[48px_1fr] gap-4 border-b border-[#D9D9D4] py-8 transition-colors duration-200 hover:bg-white md:grid-cols-[80px_1.2fr_1fr] md:items-center md:gap-8 md:py-10"
            >
              <span className="text-sm font-medium text-[#A47D36]">
                {service.number}
              </span>

              <h3 className="text-xl font-semibold tracking-tight text-[#14243A] md:text-2xl">
                {service.title}
              </h3>

              <p className="col-start-2 max-w-md text-sm leading-7 text-[#777777] md:col-start-auto">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <div className="flex flex-col justify-between gap-5 pt-10 sm:flex-row sm:items-center">
          <p className="text-sm text-gray-500">
            Serving establishments across Dombivli.
          </p>

          <span className="text-xs font-medium tracking-[0.15em] text-[#14243A] uppercase">
            Excel Security Services
          </span>
        </div>

      </div>
    </section>
  );
}
