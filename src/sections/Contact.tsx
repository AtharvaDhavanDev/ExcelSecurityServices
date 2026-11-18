
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

const contacts = [
  {
    label: "Phone",
    value: "9820528126",
    href: "tel:+919820528126",
  },
  {
    label: "Phone",
    value: "8433577668",
    href: "tel:+918433577668",
  },
];

const address =
  "Shop No-15, Balaji Darshan Society, Near Abhinav Vidyalaya, MIDC Road, Sagarli, Dombivli East, Thane - 421201, Maharashtra";

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export default function Contact() {
  return (
    <section id="contact" className="bg-[#101F33] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Top label */}
        <div className="flex items-center justify-between border-b border-white/15 py-6">
          <span className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
            Contact Us
          </span>
          <span className="text-xs tracking-wider text-white/50">
            EXCEL SECURITY SERVICES
          </span>
        </div>

        {/* Main heading */}
        <div className="grid grid-cols-1 gap-12 py-20 md:grid-cols-[1.3fr_0.7fr] md:py-28">
          <div>
            <p className="mb-7 text-sm font-medium uppercase tracking-[0.18em] text-[#C69A42]">
              Let's discuss your security requirements
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.2] tracking-tight md:text-7xl">
              The right security
              <br />
              starts with a
              <span className="text-[#C69A42]"> conversation.</span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/65">
              Looking for security guards for your business,
              institution or residential premises? Get in touch
              with us to discuss your requirements.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/919820528126"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#C69A42] px-6 py-4 text-sm font-semibold text-[#101F33] transition-colors hover:bg-[#D6AE60]"
              >
                <MessageCircle size={18} />
                WhatsApp Us
                <ArrowUpRight size={16} />
              </a>

              <a
                href="mailto:excelservices71@yahoo.com"
                className="inline-flex items-center gap-3 border border-white/25 px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                Send an Email
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Contact information */}
          <div className="flex flex-col justify-end">
            <div className="border-t border-white/15">

              {/* Phone */}
              <div className="border-b border-white/15 py-7">
                <div className="mb-4 flex items-center gap-3 text-[#C69A42]">
                  <Phone size={17} />
                  <span className="text-xs font-semibold uppercase tracking-[0.15em]">
                    Call Us
                  </span>
                </div>

                {contacts.map((contact) => (
                <a
                key={contact.value}
                href={contact.href}
                className="mb-2 block w-fit text-lg font-medium text-white transition-colors hover:text-[#C69A42]"
                >
                {contact.value}
                </a>
                ))}
              </div>

              {/* Email */}
              <div className="border-b border-white/15 py-7">
                <div className="mb-4 flex items-center gap-3 text-[#C69A42]">
                  <Mail size={17} />
                  <span className="text-xs font-semibold uppercase tracking-[0.15em]">
                    Email
                  </span>
                </div>

                <a
                  href="mailto:excelservices71@yahoo.com"
                  className="break-all text-base text-white transition-colors hover:text-[#C69A42]"
                >
                  excelservices71@yahoo.com
                </a>
              </div>

              {/* Address */}
              <div className="py-7">
                <div className="mb-4 flex items-center gap-3 text-[#C69A42]">
                  <MapPin size={17} />
                  <span className="text-xs font-semibold uppercase tracking-[0.15em]">
                    Visit Our Office
                  </span>
                </div>

                <p className="max-w-sm text-sm leading-7 text-white/65">
                  Shop No-15, Balaji Darshan Society,
                  Near Abhinav Vidyalaya, MIDC Road,
                  Sagarli, Dombivli East,
                  Thane – 421201, Maharashtra.
                </p>

                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#C69A42] transition-colors hover:text-white"
                >
                  Get Directions
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-white/15 py-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs tracking-wide text-white/45">
              Serving Dombivli and surrounding areas.
            </p>
            <p className="text-xs tracking-wide text-white/45">
              ESTABLISHED 2008
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
