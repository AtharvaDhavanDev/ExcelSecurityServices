
import { ArrowUpRight, ShieldCheck } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="bg-white px-6 py-20 md:px-12 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Intro */}
        <div className="max-w-4xl">

          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#C69A42]" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A47B30]">
              Established 2008 · Dombivli
            </p>
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-[#101F33] sm:text-5xl lg:text-7xl">
            EXCEL SECURITY
            <br />
            SERVICES<span className="text-[#C69A42]">.</span>
          </h1>

          <h2 className="mt-7 max-w-2xl text-xl font-semibold leading-relaxed text-[#26364A] sm:text-2xl">
            Security built on experience.
            <br className="hidden sm:block" />
            Trust built over time.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-500">
            Established in 2008, Excel Security Services provides
            security personnel to corporate establishments,
            institutions, residential communities and businesses
            across Dombivli.
          </p>

          <a
            href="#services"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#101F33] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1D3554]"
          >
            Explore Our Services
            <ArrowUpRight size={18} />
          </a>

        </div>

        {/* Company Statistics */}
        <div className="mt-16 grid grid-cols-2 border-y border-gray-200 md:grid-cols-3">

          <div className="border-r border-gray-200 py-8 pr-5 md:px-8">
            <p className="text-4xl font-extrabold tracking-tight text-[#101F33] sm:text-5xl">
              2008
            </p>
            <p className="mt-2 text-sm font-medium text-gray-500">
              Year Established
            </p>
          </div>

          <div className="py-8 pl-5 md:border-r md:border-gray-200 md:px-8">
            <p className="text-4xl font-extrabold tracking-tight text-[#101F33] sm:text-5xl">
              300+
            </p>
            <p className="mt-2 text-sm font-medium text-gray-500">
              Security Personnel
            </p>
          </div>

          <div className="col-span-2 border-t border-gray-200 py-8 md:col-span-1 md:border-t-0 md:px-8">
            <div className="flex items-center gap-3">
              <ShieldCheck size={36} className="text-[#C69A42]" />
              <div>
                <p className="text-xl font-bold text-[#101F33]">
                  Security Services
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Serving Dombivli
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Home;
