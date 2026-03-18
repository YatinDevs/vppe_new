import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu, X, ChevronDown, ChevronRight, ArrowRight,
  Home, Info, Trophy, BookOpen, UserCircle, Users as UsersIcon,
} from "lucide-react";
import { fulllogo, logo } from "../../assets";

const menuItems = [
  {
    name: "Home",
    path: "/pre-primary",
  },
  {
    name: "About Us",
    path: "/pre-primary/about",
    subItems: [
      { name: "Our Team", path: "/pre-primary/preprimaryourteam" },
      { name: "PTA Members", path: "/pre-primary/preprimaryptamembers" },
    ],
  },
  {
    name: "Achievements",
    path: "/pre-primary/achievements",
  },
  {
    name: "Admission",
    path: "/pre-primary/pre-primary-admission-process",
    subItems: [
      { name: "Admission Process", path: "/pre-primary/pre-primary-admission-process" },
      { name: "Admission Form", path: "/pre-primary/pre-primary-admissionform" },
      { name: "Guidelines", path: "/pre-primary/pre-primary-guidelines" },
    ],
  },
  {
    name: "Curriculum",
    path: "/pre-primary/curriculum",
  },
];

export default function PrePrimaryNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState({});
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setMobileOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  const toggleExpanded = (name) =>
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      {/* Main nav row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <Link to="/pre-primary" className="flex-shrink-0">
            <img
              src={fulllogo}
              alt="Vidya Prabodhini Pre-Primary"
              className="h-12 sm:h-14 md:h-20 w-auto"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => {
              const active = isActive(item.path);
              if (!item.subItems) {
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      active
                        ? "text-white"
                        : "text-gray-700 hover:text-pink-600 hover:bg-pink-50"
                    }`}
                    style={active ? { background: "linear-gradient(135deg, #8B5CF6, #EC4899)" } : {}}
                  >
                    {item.name}
                  </Link>
                );
              }
              // Dropdown
              return (
                <div key={item.name} className="relative group">
                  <button
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      active
                        ? "text-white"
                        : "text-gray-700 hover:text-pink-600 hover:bg-pink-50"
                    }`}
                    style={active ? { background: "linear-gradient(135deg, #8B5CF6, #EC4899)" } : {}}
                  >
                    {item.name}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  {/* Dropdown panel */}
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-20">
                    <div className="py-1.5">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className={`flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors ${
                            isActive(sub.path)
                              ? "text-pink-700 bg-pink-50 font-semibold"
                              : "text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                          }`}
                        >
                          {isActive(sub.path) && <ChevronRight size={13} className="text-pink-500" />}
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Desktop: Main Campus button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white font-bold text-sm shadow-md hover:shadow-lg transition-all group"
              style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899)" }}
            >
              Main Campus
              <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile: hamburger */}
          <button
            className="md:hidden text-gray-700 hover:text-pink-600 transition-colors p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        ref={menuRef}
        className={`md:hidden fixed top-0 right-0 h-full w-full max-w-sm z-50 transform transition-transform duration-300 ease-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-white h-full flex flex-col shadow-2xl overflow-y-auto">
          {/* Drawer header */}
          <div
            className="flex items-center justify-between p-4 sm:p-5"
            style={{ background: "linear-gradient(135deg, #4A044E, #6D28D9, #EC4899)" }}
          >
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
              <div>
                <p className="text-white font-bold text-sm">Pre-Primary Section</p>
                <p className="text-white/70 text-xs">Ages 2–6 Years</p>
              </div>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-white hover:text-pink-200 transition-colors p-1"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto p-4 space-y-1">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleExpanded(item.name)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all font-semibold text-sm ${
                        isActive(item.path)
                          ? "text-white"
                          : "text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                      }`}
                      style={isActive(item.path) ? { background: "linear-gradient(135deg, #8B5CF6, #EC4899)" } : {}}
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${expanded[item.name] ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expanded[item.name] && (
                      <div className="ml-4 mt-1 border-l-2 border-pink-200 pl-3 space-y-1">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className={`flex items-center gap-2 p-2.5 rounded-lg text-sm transition-all ${
                              isActive(sub.path)
                                ? "bg-pink-50 text-pink-700 font-semibold"
                                : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
                            }`}
                          >
                            {sub.name}
                            {isActive(sub.path) && (
                              <div className="ml-auto w-1.5 h-1.5 rounded-full bg-pink-500" />
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive(item.path)
                        ? "text-white"
                        : "text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                    }`}
                    style={isActive(item.path) ? { background: "linear-gradient(135deg, #8B5CF6, #EC4899)" } : {}}
                  >
                    {item.name}
                    <ArrowRight size={15} className={isActive(item.path) ? "text-white/70" : "text-gray-300"} />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Bottom buttons */}
          <div className="p-4 border-t border-gray-100 space-y-3">
            <Link
              to="/"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-bold text-sm shadow-md"
              style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899)" }}
            >
              Main Campus
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
