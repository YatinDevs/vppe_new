import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const PRIMARY = "#F97316";
const DARK = "#0C1B33";
const GOLD = "#F0C505";

const quickLinks = [
  { name: "Home", path: "/primary" },
  { name: "About Us", path: "about" },
  { name: "Our Team", path: "about/team" },
  { name: "PTA Members", path: "about/pta" },
  { name: "Admission Process", path: "primary-admission-process" },
  { name: "Achievements", path: "achievements" },
  { name: "Curriculum", path: "curriculum" },
  { name: "Guidelines", path: "primary-guidelines" },
];

const contactSections = [
  {
    title: "PRE-PRIMARY",
    phone: "+91 9921973113",
    phoneHref: "tel:+919921973113",
    note: "(Pre School)",
    email: "pre-primary@vppe.bhonsala.in",
    emailHref: "mailto:pre-primary@vppe.bhonsala.in",
  },
  {
    title: "PRIMARY",
    phone: "+91 7774894389",
    phoneHref: "tel:+917774894389",
    note: "(1st to 4th)",
    email: "principal@vppe.bhonsala.in",
    emailHref: "mailto:principal@vppe.bhonsala.in",
  },
  {
    title: "SECONDARY",
    phone: "+91 9921953879",
    phoneHref: "tel:+919921953879",
    note: "(5th to 10th)",
    email: "principal@vppe.bhonsala.in",
    emailHref: "mailto:principal@vppe.bhonsala.in",
  },
];

const PrimaryFooter = () => {
  return (
    <footer style={{ background: `linear-gradient(180deg, ${DARK} 0%, #1a2f4a 100%)` }}>
      {/* Accent top border */}
      <div className="h-1" style={{ background: `linear-gradient(90deg, ${PRIMARY}, ${GOLD}, ${PRIMARY})` }} />

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-12 gap-10">

        {/* Quick Links */}
        <div className="md:col-span-3">
          <h3 className="font-ui text-sm tracking-widest uppercase font-bold mb-6"
            style={{ color: GOLD }}>
            Quick Links
          </h3>
          <ul className="space-y-2.5">
            {quickLinks.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className="font-body text-sm flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
                >
                  <ChevronRight size={14} className="transition-transform group-hover:translate-x-1"
                    style={{ color: PRIMARY }} />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get In Touch */}
        <div className="md:col-span-5">
          <h3 className="font-ui text-sm tracking-widest uppercase font-bold text-center mb-8"
            style={{ color: GOLD }}>
            Get In Touch
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {contactSections.map((section, i) => (
              <div key={i}>
                <h4 className="font-ui text-xs tracking-wider font-bold mb-4"
                  style={{ color: PRIMARY }}>
                  {section.title}
                </h4>
                <a
                  href={section.phoneHref}
                  className="flex items-center gap-2 font-body text-sm text-white/80 hover:text-white transition-colors mb-1"
                >
                  <Phone size={13} style={{ color: PRIMARY }} />
                  {section.phone}
                </a>
                <p className="font-body text-xs text-white/50 mb-3 ml-5">{section.note}</p>
                <a
                  href={section.emailHref}
                  className="flex items-start gap-2 font-body text-xs text-white/70 hover:text-white transition-colors break-all"
                >
                  <Mail size={12} className="mt-0.5 flex-shrink-0" style={{ color: PRIMARY }} />
                  {section.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Find Us */}
        <div className="md:col-span-4">
          <h3 className="font-ui text-sm tracking-widest uppercase font-bold mb-6"
            style={{ color: GOLD }}>
            Find Us
          </h3>

          <div className="flex items-start gap-2 mb-4">
            <MapPin size={15} className="mt-0.5 flex-shrink-0" style={{ color: PRIMARY }} />
            <p className="font-body text-sm text-white/70 leading-relaxed">
              Dr. B. S. Moonje Marg, Rambhoomi, Nashik – 422005, Maharashtra
            </p>
          </div>

          <a
            href="https://www.google.com/maps/search/Vidya+Prabodhini+Prashala+Nashik"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden transition-all hover:ring-2"
            style={{ borderColor: "rgba(249,115,22,0.4)" }}
          >
            <iframe
              title="School Location"
              src="https://www.google.com/maps?q=Vidya%20Prabodhini%20Prashala%20Nashik&output=embed"
              className="w-full h-40 pointer-events-none"
              loading="lazy"
            />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t py-4 px-4"
        style={{ borderColor: "rgba(249,115,22,0.15)", background: "rgba(0,0,0,0.25)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>Copyright &copy; {new Date().getFullYear()} Vidya Prabodhini Prashala CBSE. All rights reserved.</p>
          <p>
            Powered by{" "}
            <a
              href="https://richsystems.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-white transition-colors"
              style={{ color: GOLD }}
            >
              RICH System Solutions Pvt Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PrimaryFooter;
