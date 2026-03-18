import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu, X, Home, Info, Trophy, BookOpen,
  UserCircle, Users, ChevronDown, ChevronUp,
  ChevronRight, ArrowRight, Phone, Mail,
} from "lucide-react";
import { fulllogo, logo } from "../../assets";

const PRIMARY = "#F97316";
const DARK = "#0C1B33";
const MID = "#194369";

const menuItems = [
  {
    name: "HOME",
    icon: Home,
    path: "/primary",
  },
  {
    name: "ABOUT US",
    icon: Info,
    path: "/primary/about",
    subItems: [
      { name: "About Us", icon: UserCircle, path: "about" },
      { name: "Our Team", icon: UserCircle, path: "about/team" },
      { name: "PTA Members", icon: Users, path: "about/pta" },
      { name: "Vishakha Committee", icon: Users, path: "about/vishakhacommittee" },
      { name: "Rules & Regulations", icon: Info, path: "/general-rules" },
    ],
  },
  {
    name: "ADMISSION",
    icon: BookOpen,
    path: "/primary-admission-process",
    subItems: [
      { name: "Admission Process", icon: UserCircle, path: "primary-admission-process" },
      { name: "Admission Form", icon: UserCircle, path: "primary-admission-form" },
      { name: "Guidelines", icon: Users, path: "primary-guidelines" },
    ],
  },
  {
    name: "ACHIEVEMENTS",
    icon: Trophy,
    path: "achievements",
  },
  {
    name: "CURRICULUM",
    icon: BookOpen,
    path: "curriculum",
  },
];

const PrimaryNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showContactBar, setShowContactBar] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

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
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        navRef.current &&
        !navRef.current.contains(e.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isMobileMenuOpen]);

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  const toggleSection = (name) =>
    setExpandedSections((prev) => ({ ...prev, [name]: !prev[name] }));

  const closeMobile = () => setIsMobileMenuOpen(false);

  const handleMainSchool = () => {
    navigate("/");
    closeMobile();
  };

  return (
    <header
      ref={navRef}
      className="w-full sticky top-0 z-50 transition-all duration-300"
      style={{ background: scrolled ? "rgba(255,255,255,0.97)" : "#fff", boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.10)" : "none" }}
    >
      {/* Contact bar */}
      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: showContactBar ? "3rem" : "0",
          opacity: showContactBar ? 1 : 0,
          background: `linear-gradient(135deg, ${DARK}, ${MID})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between text-xs text-white/80">
          <div className="hidden sm:flex items-center gap-5">
            <a href="tel:+917774894389" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={12} style={{ color: PRIMARY }} />
              <span>+91 7774894389</span>
            </a>
            <a href="mailto:principal@vppe.bhonsala.in" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={12} style={{ color: PRIMARY }} />
              <span>principal@vppe.bhonsala.in</span>
            </a>
          </div>
          <div className="sm:hidden flex items-center gap-3">
            <a href="tel:+917774894389" className="flex items-center gap-1 hover:text-white">
              <Phone size={11} style={{ color: PRIMARY }} />
              <span>7774894389</span>
            </a>
          </div>
          <span className="font-ui font-semibold tracking-wide" style={{ color: PRIMARY }}>
            CBSE Primary Section · Classes 1–4
          </span>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 relative group">
          <div className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500"
            style={{ background: "rgba(249,115,22,0.1)", filter: "blur(8px)" }} />
          <img
            src={fulllogo}
            alt="Vidya Prabodhini Prashala"
            className="relative h-10 sm:h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop: Main School button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={handleMainSchool}
            className="flex items-center gap-2 font-ui font-semibold text-sm px-5 py-2.5 rounded-xl text-white transition-all hover:scale-105 shadow"
            style={{ background: `linear-gradient(135deg, ${DARK}, ${MID})` }}
          >
            Main School <ChevronRight size={15} />
          </button>
        </div>

        {/* Mobile: hamburger */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          style={{ color: isMobileMenuOpen ? PRIMARY : "#374151" }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:block border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex items-center">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            if (!item.subItems) {
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center gap-2 px-4 py-3 font-ui font-semibold text-sm relative group transition-colors"
                  style={{
                    color: active ? PRIMARY : "#4B5563",
                    borderBottom: active ? `2px solid ${PRIMARY}` : "2px solid transparent",
                  }}
                >
                  <Icon size={16} style={{ color: active ? PRIMARY : "#9CA3AF" }} />
                  <span>{item.name}</span>
                  {!active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 group-hover:w-8 transition-all duration-300"
                      style={{ background: PRIMARY }} />
                  )}
                </Link>
              );
            }

            return (
              <div key={item.name} className="relative group">
                <button
                  className="flex items-center gap-2 px-4 py-3 font-ui font-semibold text-sm relative transition-colors"
                  style={{
                    color: active ? PRIMARY : "#4B5563",
                    borderBottom: active ? `2px solid ${PRIMARY}` : "2px solid transparent",
                  }}
                >
                  <Icon size={16} style={{ color: active ? PRIMARY : "#9CA3AF" }} />
                  <span>{item.name}</span>
                  <ChevronDown size={14} className="ml-0.5 group-hover:rotate-180 transition-transform duration-300" />
                </button>

                {/* Dropdown */}
                <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-20 py-2">
                  {item.subItems.map((sub) => {
                    const SubIcon = sub.icon;
                    const subActive = isActive(sub.path);
                    return (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="flex items-center gap-3 px-4 py-3 text-sm font-body transition-colors hover:bg-orange-50"
                        style={{ color: subActive ? PRIMARY : "#374151" }}
                      >
                        <SubIcon size={14} style={{ color: subActive ? PRIMARY : "#9CA3AF" }} />
                        <span>{sub.name}</span>
                        {subActive && <ChevronRight size={12} className="ml-auto" style={{ color: PRIMARY }} />}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className="md:hidden fixed inset-0 z-40 transition-all duration-300"
        style={{
          background: isMobileMenuOpen ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)",
          backdropFilter: isMobileMenuOpen ? "blur(4px)" : "blur(0)",
          visibility: isMobileMenuOpen ? "visible" : "hidden",
        }}
        onClick={closeMobile}
      />

      {/* Mobile panel */}
      <div
        ref={mobileMenuRef}
        className="md:hidden fixed top-0 right-0 h-full w-full max-w-sm z-50 transition-transform duration-300 ease-out"
        style={{
          transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)",
          display: isMobileMenuOpen ? "block" : "none",
        }}
      >
        <div className="bg-white h-full flex flex-col shadow-2xl overflow-y-auto">
          {/* Panel header */}
          <div className="p-5 flex items-center justify-between"
            style={{ background: `linear-gradient(135deg, ${DARK}, ${MID})` }}>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
              <div>
                <p className="font-title font-bold text-white text-sm">Primary Section</p>
                <p className="font-body text-xs text-white/70">Classes 1 to 4</p>
              </div>
            </div>
            <button onClick={closeMobile} className="text-white/80 hover:text-white transition-colors">
              <X size={22} />
            </button>
          </div>

          {/* Contact strip */}
          <div className="px-5 py-4 border-b border-gray-100 space-y-2">
            <a href="tel:+917774894389" className="flex items-center gap-3 text-sm text-gray-600 hover:text-orange-600 transition-colors">
              <Phone size={14} style={{ color: PRIMARY }} />
              <span>+91 7774894389</span>
            </a>
            <a href="mailto:principal@vppe.bhonsala.in" className="flex items-center gap-3 text-sm text-gray-600 hover:text-orange-600 transition-colors break-all">
              <Mail size={14} style={{ color: PRIMARY }} />
              <span>principal@vppe.bhonsala.in</span>
            </a>
          </div>

          {/* Nav items */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              if (!item.subItems) {
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={closeMobile}
                    className="flex items-center justify-between p-3 rounded-xl font-ui font-semibold text-sm transition-all"
                    style={active
                      ? { background: "rgba(249,115,22,0.08)", color: PRIMARY }
                      : { color: "#374151" }}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={16} style={{ color: active ? PRIMARY : "#9CA3AF" }} />
                      <span>{item.name}</span>
                    </div>
                    <ArrowRight size={14} style={{ color: active ? PRIMARY : "#D1D5DB" }} />
                  </Link>
                );
              }

              return (
                <div key={item.name}>
                  <button
                    onClick={() => toggleSection(item.name)}
                    className="w-full flex items-center justify-between p-3 rounded-xl font-ui font-semibold text-sm transition-all"
                    style={active
                      ? { background: "rgba(249,115,22,0.08)", color: PRIMARY }
                      : { color: "#374151" }}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={16} style={{ color: active ? PRIMARY : "#9CA3AF" }} />
                      <span>{item.name}</span>
                    </div>
                    {expandedSections[item.name]
                      ? <ChevronUp size={14} style={{ color: PRIMARY }} />
                      : <ChevronDown size={14} className="text-gray-400" />
                    }
                  </button>
                  {expandedSections[item.name] && (
                    <div className="ml-5 mt-1 space-y-1 border-l-2 pl-3"
                      style={{ borderColor: "rgba(249,115,22,0.3)" }}>
                      {item.subItems.map((sub) => {
                        const SubIcon = sub.icon;
                        const subActive = isActive(sub.path);
                        return (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            onClick={closeMobile}
                            className="flex items-center gap-3 p-3 rounded-lg text-sm font-body transition-colors"
                            style={subActive
                              ? { background: "rgba(249,115,22,0.08)", color: PRIMARY }
                              : { color: "#374151" }}
                          >
                            <SubIcon size={13} style={{ color: subActive ? PRIMARY : "#9CA3AF" }} />
                            <span>{sub.name}</span>
                            {subActive && <div className="ml-auto h-2 w-2 rounded-full" style={{ background: PRIMARY }} />}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer buttons */}
          <div className="p-4 border-t border-gray-100 space-y-3 bg-gray-50">
            <button
              onClick={handleMainSchool}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-ui font-semibold text-sm text-white transition-all hover:opacity-90"
              style={{ background: `linear-gradient(135deg, ${DARK}, ${MID})` }}
            >
              Main School <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PrimaryNavbar;
