import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Info,
  Trophy,
  BookOpen,
  UserCircle,
  Users as UsersIcon,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronRight,
  GraduationCap,
} from "lucide-react";
import { fulllogo, logo } from "../../assets";

const navyGradient = "linear-gradient(135deg, #194369, #800000)";

const menuItems = [
  {
    name: "HOME",
    icon: Home,
    path: "/secondary",
  },
  {
    name: "ABOUT US",
    icon: Info,
    path: "/secondary/about",
    subItems: [
      { name: "OUR TEAM", icon: UserCircle, path: "/secondary/about/team" },
      { name: "PTA MEMBERS", icon: UsersIcon, path: "/secondary/about/pta" },
      { name: "RULES & REGULATIONS", icon: UsersIcon, path: "/general-rules" },
    ],
  },
  {
    name: "ADMISSION",
    icon: GraduationCap,
    path: "/secondary-admission-process",
    subItems: [
      { name: "ADMISSION PROCESS", icon: UserCircle, path: "/secondary-admission-process" },
      { name: "ADMISSION FORM", icon: UserCircle, path: "/secondary-admission-form" },
      { name: "GUIDELINES", icon: UsersIcon, path: "/secondary-guidlines" },
    ],
  },
  {
    name: "ACHIEVEMENTS",
    icon: Trophy,
    path: "/secondary/achievements",
  },
  {
    name: "CURRICULUM",
    icon: BookOpen,
    path: "/secondary/curriculum",
  },
];

const contactInfo = [
  { icon: Phone, text: "+91 77748 94389", link: "tel:+917774894389" },
  { icon: Mail, text: "principal@vppe.bhonsala.in", link: "mailto:principal@vppe.bhonsala.in" },
  { icon: MapPin, text: "Secondary Section, Nashik", link: "#map" },
];

const SecondaryNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showContactBar, setShowContactBar] = useState(true);
  const [expandedSections, setExpandedSections] = useState({});
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowContactBar(window.scrollY <= 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        navRef.current &&
        !navRef.current.contains(e.target) &&
        isMobileMenuOpen
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  const toggleSection = (name) => {
    setExpandedSections((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <header
      ref={navRef}
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-xl" : "shadow-sm"
      }`}
      style={{ background: scrolled ? "rgba(255,255,255,0.98)" : "#fff", backdropFilter: scrolled ? "blur(10px)" : "none" }}
    >
      {/* Contact bar */}
      <div
        className="transition-all duration-300 overflow-hidden text-white text-xs"
        style={{
          maxHeight: showContactBar ? "3rem" : "0",
          opacity: showContactBar ? 1 : 0,
          background: navyGradient,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="hidden sm:flex items-center gap-5">
              {contactInfo.map((info, i) => (
                <a key={i} href={info.link} className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors">
                  <info.icon size={13} />
                  <span>{info.text}</span>
                </a>
              ))}
            </div>
            <div className="sm:hidden flex items-center gap-3">
              <a href="tel:+917774894389" className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
                <Phone size={12} />
                <span>7774894389</span>
              </a>
              <span className="text-white/40">|</span>
              <a href="mailto:principal@vppe.bhonsala.in" className="flex items-center gap-1 hover:text-yellow-300 transition-colors truncate max-w-[160px]">
                <Mail size={12} />
                <span className="truncate">principal@vppe.bhonsala.in</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 group">
              <img
                src={fulllogo}
                alt="Vidya Prabodhini Logo"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain"
              />
            </Link>

            {/* Desktop: Main Campus + Mobile hamburger */}
            <div className="flex items-center gap-3">
              {/* Desktop main campus button */}
              <Link
                to="/"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold shadow hover:opacity-90 transition-all"
                style={{ background: navyGradient }}
              >
                Main Campus
                <ChevronRight size={16} />
              </Link>
              {/* Mobile hamburger */}
              <button
                className="md:hidden p-2 rounded-lg transition-colors"
                style={{ color: "#194369" }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile school info */}
          <div className="md:hidden mt-1.5 text-center">
            <p className="text-sm font-bold" style={{ color: "#194369" }}>Secondary Section</p>
            <p className="text-xs text-gray-500">Class 5th to 10th</p>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              if (!item.subItems) {
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="relative group flex items-center gap-2 px-4 py-3.5 text-sm font-semibold transition-all duration-200"
                    style={{ color: active ? "#194369" : "#6b7280" }}
                  >
                    <Icon size={16} className="transition-transform group-hover:scale-110" />
                    <span>{item.name}</span>
                    {/* Active / hover underline */}
                    <span
                      className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full transition-all duration-200"
                      style={{
                        background: navyGradient,
                        opacity: active ? 1 : 0,
                        transform: active ? "scaleX(1)" : "scaleX(0)",
                      }}
                    />
                    <span
                      className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-60"
                      style={{ background: navyGradient }}
                    />
                  </Link>
                );
              }

              return (
                <div key={item.name} className="relative group">
                  <button
                    className="flex items-center gap-2 px-4 py-3.5 text-sm font-semibold transition-all duration-200"
                    style={{ color: active ? "#194369" : "#6b7280" }}
                  >
                    <Icon size={16} />
                    <span>{item.name}</span>
                    <ChevronDown size={14} className="ml-1 group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 w-56 bg-white shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-20 border border-gray-100 overflow-hidden">
                    {item.subItems.map((sub) => {
                      const SubIcon = sub.icon;
                      const subActive = location.pathname === sub.path;
                      return (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="flex items-center gap-3 px-4 py-3 text-sm transition-colors"
                          style={{ color: subActive ? "#194369" : "#374151", background: subActive ? "rgba(25,67,105,0.05)" : "transparent" }}
                          onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(25,67,105,0.05)"; e.currentTarget.style.color = "#194369"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = subActive ? "rgba(25,67,105,0.05)" : "transparent"; e.currentTarget.style.color = subActive ? "#194369" : "#374151"; }}
                        >
                          <SubIcon size={15} />
                          <span className="font-medium">{sub.name}</span>
                          {subActive && <ChevronRight size={13} className="ml-auto" />}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${isMobileMenuOpen ? "bg-black/50 visible" : "bg-transparent invisible pointer-events-none"}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden fixed top-0 right-0 h-full w-full max-w-sm z-50 transform transition-transform duration-300 ease-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="bg-white h-full flex flex-col shadow-2xl overflow-y-auto">
          {/* Header */}
          <div className="text-white p-5" style={{ background: navyGradient }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Menu</h3>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 hover:text-white p-1">
                <X size={24} />
              </button>
            </div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
              <div>
                <p className="font-bold text-sm">Secondary Section</p>
                <p className="text-xs text-white/70">Class 5th to 10th</p>
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="p-5 border-b border-gray-100">
            {contactInfo.map((info, i) => (
              <a key={i} href={info.link} className="flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-blue-900 transition-colors">
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(25,67,105,0.08)" }}>
                  <info.icon size={14} style={{ color: "#194369" }} />
                </div>
                <span>{info.text}</span>
              </a>
            ))}
          </div>

          {/* Nav links */}
          <nav className="flex-1 p-4 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              if (!item.subItems) {
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all"
                    style={active ? { background: "rgba(25,67,105,0.08)", color: "#194369" } : { color: "#374151" }}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </Link>
                );
              }

              return (
                <div key={item.name}>
                  <button
                    onClick={() => toggleSection(item.name)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all"
                    style={{ color: active ? "#194369" : "#374151" }}
                  >
                    <Icon size={18} />
                    <span className="flex-1 text-left">{item.name}</span>
                    {expandedSections[item.name] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  </button>
                  {expandedSections[item.name] && (
                    <div className="ml-8 mt-1 space-y-1 pb-1">
                      {item.subItems.map((sub) => {
                        const SubIcon = sub.icon;
                        return (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                            style={location.pathname === sub.path ? { background: "rgba(25,67,105,0.06)", color: "#194369" } : { color: "#6b7280" }}
                          >
                            <SubIcon size={15} />
                            <span>{sub.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Main Campus link */}
          <div className="p-5 border-t border-gray-100">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white font-semibold text-sm"
              style={{ background: navyGradient }}
            >
              Main Campus
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SecondaryNavbar;
