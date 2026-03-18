import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const quickLinks = [
  { name: "Home", path: "/pre-primary" },
  { name: "Our Team", path: "/pre-primary/preprimaryourteam" },
  { name: "PTA Members", path: "/pre-primary/preprimaryptamembers" },
  { name: "Achievements", path: "/pre-primary/achievements" },
  { name: "Curriculum", path: "/pre-primary/curriculum" },
  { name: "Admission Process", path: "/pre-primary/pre-primary-admission-process" },
  { name: "Admission Form", path: "/pre-primary/pre-primary-admissionform" },
  { name: "Guidelines", path: "/pre-primary/pre-primary-guidelines" },
];

const contacts = [
  {
    section: "Pre-Primary",
    phone: "+919921973113",
    phonePlain: "9921973113",
    sublabel: "Playgroup · Nursery · LKG · UKG",
    email: "pre-primary@vppe.bhonsala.in",
  },
  {
    section: "Primary",
    phone: "+917774894389",
    phonePlain: "7774894389",
    sublabel: "Class 1st to 4th",
    email: "principal@vppe.bhonsala.in",
  },
  {
    section: "Secondary",
    phone: "+919921953879",
    phonePlain: "9921953879",
    sublabel: "Class 5th to 10th",
    email: "principal@vppe.bhonsala.in",
  },
];

const socials = [
  { icon: <FaFacebookF size={15} />, bg: "#1877F2", href: "https://www.facebook.com/vppe.bhonsala", label: "Facebook" },
  { icon: <FaInstagram size={15} />, bg: "linear-gradient(135deg, #833AB4, #FD1D1D, #FCAF45)", href: "https://www.instagram.com/vppe.bhonsala", label: "Instagram" },
  { icon: <FaYoutube size={15} />, bg: "#FF0000", href: "https://www.youtube.com/@vppe", label: "YouTube" },
  { icon: <FaWhatsapp size={15} />, bg: "#25D366", href: "https://wa.me/917774894389", label: "WhatsApp" },
];

const rainbowColors = ["#EC4899", "#F59E0B", "#3B82F6", "#10B981", "#8B5CF6", "#EF4444", "#06B6D4", "#84CC16"];

export default function PrePrimaryFooter() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #4A044E 0%, #3B0764 100%)" }}
    >
      {/* Decorative dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          "top-6 left-8", "top-12 right-20", "bottom-16 left-16",
          "bottom-8 right-12", "top-1/2 left-1/3",
        ].map((pos, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full opacity-20`}
            style={{
              top: pos.includes("top-") ? undefined : undefined,
              background: rainbowColors[i % rainbowColors.length],
            }}
            animate={{ y: [0, -6, 0], opacity: [0.15, 0.3, 0.15] }}
            transition={{ repeat: Infinity, duration: 2 + i * 0.4, delay: i * 0.3 }}
          />
        ))}
        <div className="absolute top-0 left-0 w-48 h-48 rounded-full opacity-10 blur-3xl" style={{ background: "#EC4899" }} />
        <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full opacity-10 blur-3xl" style={{ background: "#8B5CF6" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-4">
        {/* Brand Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-8 border-b border-white/10">
          <div className="text-center md:text-left">
            <h3 className="text-white font-black text-xl mb-1">Pre-Primary Section</h3>
            <p className="text-white/60 text-sm">Vidya Prabodhini Prashala English Medium School</p>
            <p className="text-white/40 text-xs mt-0.5">CBSE Affiliated · Est. 1936 · Nashik</p>
          </div>
          <div className="flex items-center gap-3">
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-full flex items-center justify-center text-white shadow-md"
                style={{ background: s.bg }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Quick Links */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2"
              style={{ color: "#F9A8D4" }}
            >
              <ChevronRight size={14} />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-2 text-white/70 hover:text-pink-300 transition-colors text-sm group"
                  >
                    <ChevronRight size={12} className="text-pink-400 group-hover:translate-x-1 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2"
              style={{ color: "#F9A8D4" }}
            >
              <Phone size={13} />
              Get In Touch
            </h4>
            <div className="space-y-5">
              {contacts.map((c, i) => (
                <div key={i} className="flex gap-3">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(236,72,153,0.2)" }}
                  >
                    <Phone size={12} style={{ color: "#F9A8D4" }} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm mb-0.5">{c.section}</p>
                    <p className="text-white/40 text-xs mb-1">{c.sublabel}</p>
                    <a
                      href={`tel:${c.phone}`}
                      className="flex items-center gap-1.5 text-white/70 hover:text-pink-300 transition-colors text-xs mb-0.5"
                    >
                      <Phone size={10} /> {c.phonePlain}
                    </a>
                    <a
                      href={`mailto:${c.email}`}
                      className="flex items-center gap-1.5 text-white/70 hover:text-pink-300 transition-colors text-xs break-all"
                    >
                      <Mail size={10} /> {c.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Find Us */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2"
              style={{ color: "#F9A8D4" }}
            >
              <MapPin size={13} />
              Find Us
            </h4>
            <div className="flex items-start gap-2 text-white/70 text-xs mb-4">
              <MapPin size={12} className="text-pink-400 flex-shrink-0 mt-0.5" />
              <span>Dr. B. S. Moonje Marg, Rambhoomi, Nashik – 422005, Maharashtra</span>
            </div>
            <a
              href="https://www.google.com/maps/search/Vidya+Prabodhini+Prashala+Nashik"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl overflow-hidden border border-white/10 hover:border-pink-400/50 transition-colors"
            >
              <iframe
                title="School Location"
                src="https://www.google.com/maps?q=Vidya%20Prabodhini%20Prashala%20Nashik&output=embed"
                className="w-full h-36 pointer-events-none"
                loading="lazy"
              />
            </a>
            <Link
              to="/"
              className="mt-4 flex items-center gap-2 text-xs text-white/60 hover:text-pink-300 transition-colors group"
            >
              <ChevronRight size={12} className="text-pink-400" />
              <span className="group-hover:translate-x-0.5 transition-transform">Visit Main Campus</span>
            </Link>
          </div>
        </div>

        {/* Rainbow divider */}
        <div className="flex gap-1 mb-4">
          {rainbowColors.map((color, i) => (
            <div key={i} className="h-1 flex-1 rounded-full opacity-60" style={{ background: color }} />
          ))}
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 py-3 text-xs text-white/40">
          <p>© 2025 Vidya Prabodhini Prashala. All rights reserved.</p>
          <p>
            Powered by{" "}
            <a
              href="https://richsystems.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-300 transition-colors font-semibold"
              style={{ color: "#F9A8D4" }}
            >
              RICH System Solutions Pvt Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
