import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, GraduationCap } from "lucide-react";
import { logo } from "../../assets";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Pre-Primary", path: "/pre-primary" },
  { name: "Primary", path: "/primary" },
  { name: "Secondary", path: "/secondary" },
  { name: "Admission", path: "/admission" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src={logo}
              alt="VPPE Logo"
              className="h-10 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <p
                className={`font-black text-base leading-tight transition-colors duration-300 ${
                  scrolled ? "text-[#0C1B33]" : "text-white"
                }`}
              >
                V.P.P. English Medium
              </p>
              <p
                className={`text-xs transition-colors duration-300 ${
                  scrolled ? "text-[#F97316]" : "text-orange-300"
                }`}
              >
                CBSE Affiliated School · Nashik
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.filter((l) => l.name !== "Admission").map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isActive(link.path)
                    ? "text-[#F97316] bg-orange-50"
                    : scrolled
                    ? "text-[#0C1B33] hover:text-[#F97316] hover:bg-orange-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Admission CTA */}
            <Link
              to="/admission"
              className={`ml-3 px-5 py-2 rounded-lg text-sm font-bold text-white transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 ${
                isActive("/admission")
                  ? "bg-[#194369]"
                  : "bg-gradient-to-r from-[#F97316] to-[#F0C505] hover:from-[#ea6c0a] hover:to-[#d4ac04]"
              }`}
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-[#0C1B33]" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 top-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="md:hidden fixed top-0 right-0 h-screen w-72 bg-white z-50 shadow-2xl flex flex-col">
            {/* Mobile Menu Header */}
            <div
              className="flex items-center justify-between p-5"
              style={{
                background: "linear-gradient(135deg, #0C1B33 0%, #194369 60%, #F97316 100%)",
              }}
            >
              <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="h-9 w-auto" />
                <div>
                  <p className="text-white font-bold text-sm">V.P.P. English</p>
                  <p className="text-orange-300 text-xs">CBSE · Nashik</p>
                </div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white/80 hover:text-white p-1"
              >
                <X size={22} />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive(link.path)
                      ? "bg-orange-50 text-[#F97316]"
                      : "text-gray-700 hover:bg-orange-50 hover:text-[#F97316]"
                  }`}
                >
                  <GraduationCap
                    size={16}
                    className={isActive(link.path) ? "text-[#F97316]" : "text-gray-400"}
                  />
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="p-4 border-t border-gray-100">
              <Link
                to="/admission"
                className="block w-full text-center py-3 rounded-xl text-white font-bold text-sm"
                style={{
                  background: "linear-gradient(135deg, #F97316, #F0C505)",
                }}
              >
                Apply for Admission
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
