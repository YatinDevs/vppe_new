import { Phone, Mail, ChevronRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Home", path: "/secondary" },
  { name: "About Us", path: "/secondary/about" },
  { name: "Our Team", path: "/secondary/about/team" },
  { name: "PTA Members", path: "/secondary/about/pta" },
  { name: "Admission Process", path: "/secondary-admission-process" },
  { name: "Achievements", path: "/secondary/achievements" },
  { name: "Curriculum", path: "/secondary/curriculum" },
  { name: "General Rules", path: "/general-rules" },
];

const sections = [
  { label: "Pre-Primary", phone: "9921973113", desc: "Pre School", email: "pre-primary@vppe.bhonsala.in" },
  { label: "Primary", phone: "7774894389", desc: "1st to 4th", email: "principal@vppe.bhonsala.in" },
  { label: "Secondary", phone: "9921953879", desc: "5th to 10th", email: "principal@vppe.bhonsala.in" },
];

const SecondaryFooter = () => {
  return (
    <footer
      style={{ background: "linear-gradient(180deg, #0C1B33 0%, #1a2f4a 100%)" }}
      className="text-white"
    >
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-12 gap-8">

        {/* Quick Links */}
        <div className="md:col-span-3">
          <h3
            className="font-title font-bold text-lg mb-6 tracking-wide"
            style={{ color: "#F0C505" }}
          >
            QUICK LINKS
          </h3>
          <ul className="space-y-2.5">
            {quickLinks.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-yellow-300 transition-colors"
                >
                  <ChevronRight size={14} style={{ color: "#F0C505", flexShrink: 0 }} />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get In Touch */}
        <div className="md:col-span-5">
          <h3
            className="font-title font-bold text-lg mb-6 tracking-wide text-center"
            style={{ color: "#F0C505" }}
          >
            GET IN TOUCH
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            {sections.map((s, i) => (
              <div key={i}>
                <h4
                  className="font-semibold mb-3 text-sm"
                  style={{ color: "#F0C505" }}
                >
                  {s.label.toUpperCase()}
                </h4>
                <a
                  href={`tel:+91${s.phone}`}
                  className="flex items-center gap-2 mb-1.5 text-gray-300 hover:text-yellow-300 transition-colors"
                >
                  <Phone size={14} />
                  {s.phone}
                </a>
                <p className="text-gray-500 text-xs mb-2">({s.desc})</p>
                <a
                  href={`mailto:${s.email}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-yellow-300 transition-colors break-all text-xs"
                >
                  <Mail size={13} />
                  {s.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Find Us */}
        <div className="md:col-span-4">
          <h3
            className="font-title font-bold text-lg mb-6 tracking-wide"
            style={{ color: "#F0C505" }}
          >
            FIND US
          </h3>
          <a
            href="https://www.google.com/maps/search/Vidya+Prabodhini+Prashala+Nashik"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden border border-white/10 hover:border-yellow-400/40 transition-colors mb-4"
          >
            <iframe
              title="Location"
              src="https://www.google.com/maps?q=Vidya%20Prabodhini%20Prashala%20Nashik&output=embed"
              className="w-full h-44 pointer-events-none"
              loading="lazy"
            />
          </a>
          <div className="flex items-start gap-2 text-gray-400 text-sm">
            <MapPin size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#F0C505" }} />
            <span>Dr. B. S. Moonje Marg, Rambhoomi, Nashik - 422005</span>
          </div>
          {/* PIN */}
          <div className="flex gap-1.5 mt-3">
            {"422005".split("").map((n, i) => (
              <button
                key={i}
                onClick={() => {
                  navigator.clipboard.writeText("422005");
                }}
                className="text-sm px-2 py-1 rounded text-gray-300 hover:text-yellow-300 transition-colors"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
                title="Click to copy PIN"
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div
        className="border-t border-white/10 py-4 text-sm text-gray-400"
        style={{ background: "rgba(0,0,0,0.2)" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>
            Copyright &copy; {new Date().getFullYear()} Vidya Prabodhini Prashala CBSE. All rights reserved.
          </p>
          <p>
            Powered by{" "}
            <a
              href="https://richsystems.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-yellow-300 transition-colors"
              style={{ color: "#F0C505" }}
            >
              RICH System Solutions Pvt Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SecondaryFooter;
