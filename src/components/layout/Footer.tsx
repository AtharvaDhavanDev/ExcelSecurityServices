
import { ArrowUp } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#101F33] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Main footer */}
        <div className="flex flex-col gap-12 py-12 md:flex-row md:items-center md:justify-between md:py-16">

          {/* Logo and brand */}
          <div>
            <a href="#home" className="inline-block">
              <img
                src="/logo.png"
                alt="Excel Security Services"
                className="w-[170px] object-contain"
              />
            </a>

            <p className="mt-4 text-sm text-white/50">
              Security services since 2008.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-7 gap-y-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/70 transition-colors duration-200 hover:text-[#C69A42]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-all duration-200 hover:border-[#C69A42] hover:bg-[#C69A42] hover:text-[#101F33]"
          >
            <ArrowUp size={18} />
          </a>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-white/15 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} Excel Security Services. All rights reserved.
          </p>

          <p className="text-xs text-white/45">
            Dombivli, Maharashtra, India
          </p>
        </div>

      </div>
    </footer>
  );
}
