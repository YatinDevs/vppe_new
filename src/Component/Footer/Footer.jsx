import { Phone, Mail, MapPin, ChevronRight, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Pre-Primary", path: "/pre-primary" },
    { name: "Primary", path: "/primary" },
    { name: "Secondary", path: "/secondary" },
    { name: "Admission", path: "/admission" },
    { name: "General Rules", path: "/general-rules" },
  ];

  const contactSections = [
    {
      section: "Pre-Primary",
      phone: "9921973113",
      sub: "(Pre School)",
      email: "pre-primary@vppe.bhonsala.in",
    },
    {
      section: "Primary",
      phone: "7774894389",
      sub: "(1st to 4th)",
      email: "principal@vppe.bhonsala.in",
    },
    {
      section: "Secondary",
      phone: "9921953879",
      sub: "(5th to 10th)",
      email: "principal@vppe.bhonsala.in",
    },
  ];

  const socials = [
    { icon: <Facebook size={17} />, href: "https://facebook.com/vppschoolemp", label: "Facebook" },
    { icon: <Instagram size={17} />, href: "https://instagram.com/vppschoolemp", label: "Instagram" },
    { icon: <Youtube size={17} />, href: "https://youtube.com/vppschoolemp", label: "YouTube" },
    { icon: <Twitter size={17} />, href: "https://twitter.com/vppschoolemp", label: "Twitter" },
  ];

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #0C1B33 0%, #1a2f4a 100%)",
      }}
    >
      {/* Social Row */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/60 text-sm">Follow us on social media</p>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#F97316] hover:text-white transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1: About */}
        <div>
          <h3 className="text-[#F97316] font-bold text-sm tracking-widest uppercase mb-5">
            About School
          </h3>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Vidya Prabodhini Prashala English Medium School — a CBSE affiliated institution under CHME's, dedicated to holistic education since 1936.
          </p>
          <div className="flex items-start gap-2 text-white/50 text-xs">
            <MapPin size={13} className="mt-0.5 flex-shrink-0 text-[#F97316]" />
            <span>Dr. B.S. Moonje Marg, Rambhoomi, Nashik – 422005</span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h3 className="text-[#F97316] font-bold text-sm tracking-widest uppercase mb-5">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="flex items-center gap-2 text-white/60 hover:text-[#F97316] text-sm transition-colors duration-200 group"
                >
                  <ChevronRight
                    size={14}
                    className="text-white/30 group-hover:text-[#F97316] transition-colors"
                  />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Get in Touch */}
        <div>
          <h3 className="text-[#F97316] font-bold text-sm tracking-widest uppercase mb-5">
            Get in Touch
          </h3>
          <div className="space-y-5">
            {contactSections.map((c) => (
              <div key={c.section}>
                <p className="text-[#F0C505] font-semibold text-xs uppercase mb-1">{c.section}</p>
                <a
                  href={`tel:+91${c.phone}`}
                  className="flex items-center gap-2 text-white/60 hover:text-[#F97316] text-xs transition-colors mb-0.5"
                >
                  <Phone size={12} className="text-[#F97316]" />
                  {c.phone} <span className="text-white/40">{c.sub}</span>
                </a>
                <a
                  href={`mailto:${c.email}`}
                  className="flex items-center gap-2 text-white/60 hover:text-[#F97316] text-xs transition-colors break-all"
                >
                  <Mail size={12} className="text-[#F97316] flex-shrink-0" />
                  {c.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Col 4: Find Us */}
        <div>
          <h3 className="text-[#F97316] font-bold text-sm tracking-widest uppercase mb-5">
            Find Us
          </h3>
          <a
            href="https://www.google.com/maps/search/Vidya+Prabodhini+Prashala+Nashik"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden border border-white/10 hover:border-[#F97316]/50 transition-colors"
          >
            <iframe
              title="VPPE Location"
              src="https://www.google.com/maps?q=Vidya%20Prabodhini%20Prashala%20Nashik&output=embed"
              className="w-full h-36 pointer-events-none"
              loading="lazy"
            />
          </a>
          <p className="text-white/40 text-xs mt-3">
            CBSE Affiliation No: 1130258
          </p>
        </div>
      </div>

      {/* Colorful Divider */}
      <div className="h-1" style={{ background: "linear-gradient(90deg, #0C1B33, #194369, #F97316, #F0C505, #F97316, #194369, #0C1B33)" }} />

      {/* Bottom Bar */}
      <div className="bg-black/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>Copyright &copy; 2025 Vidya Prabodhini Prashala. All rights reserved.</p>
          <p>
            Powered by{" "}
            <a
              href="https://richsystems.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F97316] font-semibold hover:text-[#F0C505] transition-colors"
            >
              RICH System Solutions Pvt Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
