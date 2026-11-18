
import { useState } from "react";
import {
  House,
  ShieldCheck,
  Building2,
  Factory,
  Phone,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home", icon: House },
  { name: "Services", href: "#services", icon: ShieldCheck },
  { name: "About Us", href: "#about", icon: Building2 },
  { name: "Industries", href: "#industries", icon: Factory },
  { name: "Contact", href: "#contact", icon: Phone },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-xl">

      <nav className="relative mx-auto flex h-24 max-w-[1600px] items-center justify-between px-6 md:px-10 lg:grid lg:grid-cols-3">

        {/* Logo */}
        <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center justify-self-start"
            >
            <img
            src="/logo.png"
            alt="Excel Security Services"
            className="h-auto w-[180px] object-contain"
            />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center justify-center gap-2 lg:flex">

          {navLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.name}
                href={link.href}
                className="group flex min-w-[86px] flex-col items-center gap-1 whitespace-nowrap rounded-xl px-4 py-2.5 text-gray-600 transition-all duration-200 hover:scale-105 hover:bg-gray-100 hover:text-[#101F33]"
              >
                <Icon
                  size={22}
                  strokeWidth={1.8}
                  className="transition-transform duration-200 group-hover:scale-105"
                />

                <span className="text-[12px] font-semibold tracking-wide">
                  {link.name}
                </span>
              </a>
            );
          })}

        </div>

        {/* Right side spacer */}
        <div className="hidden lg:block" />

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-[#101F33] transition-colors hover:bg-gray-100 lg:hidden"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`absolute left-0 top-full w-full overflow-hidden border-b border-gray-100 bg-white shadow-lg transition-all duration-300 lg:hidden ${
            menuOpen
              ? "max-h-96 opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 px-5 py-4">

            {navLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition-all duration-200 hover:scale-[1.02] hover:bg-gray-100 hover:text-[#101F33]"
                >
                  <Icon size={20} strokeWidth={1.8} />
                  {link.name}
                </a>
              );
            })}

          </div>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
