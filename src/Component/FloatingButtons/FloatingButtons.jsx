import React, { useState } from "react";
import { FaWhatsapp, FaInstagram, FaPhoneAlt, FaFacebookF } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function FloatingButtons() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const contactInfo = {
    phone: "+917507546666",
    whatsapp: "+917507546666",
    whatsappMessage:
      "Hello%20👋%0A%0AI%20am%20interested%20in%20getting%20more%20information%20about%0A*Vidya%20Prabodhini%20Prashala%20(VPPE%20School).*%0A%0AThank%20you.",
    instagram: "https://www.instagram.com/vppe.bhonsala",
    facebook: "https://www.facebook.com/vppe.bhonsala",
  };

  const buttons = [
    {
      icon: <FaFacebookF size={18} />,
      label: "Facebook",
      href: contactInfo.facebook,
      bgColor: "bg-[#1877F2]",
      hoverColor: "hover:bg-[#1666d8]",
      target: "_blank",
      rel: "noopener noreferrer nofollow",
      aria: "Visit our Facebook page",
      tooltip: "Follow on Facebook",
    },
    {
      icon: <FaInstagram size={20} />,
      label: "Instagram",
      href: contactInfo.instagram,
      bgColor: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]",
      hoverColor: "hover:opacity-90",
      target: "_blank",
      rel: "noopener noreferrer nofollow",
      aria: "Visit our Instagram",
      tooltip: "Follow on Instagram",
    },
    {
      icon: <FaPhoneAlt size={17} />,
      label: "Call Now",
      href: `tel:${contactInfo.phone}`,
      bgColor: "bg-green-600",
      hoverColor: "hover:bg-green-700",
      target: "_self",
      rel: "",
      aria: "Call us",
      tooltip: "Call us directly",
    },
    {
      icon: <FaWhatsapp size={22} />,
      label: "WhatsApp",
      href: `https://wa.me/${contactInfo.whatsapp}?text=${contactInfo.whatsappMessage}`,
      bgColor: "bg-[#25D366]",
      hoverColor: "hover:bg-[#20ba5a]",
      target: "_blank",
      rel: "noopener noreferrer",
      aria: "Chat on WhatsApp",
      tooltip: "Chat on WhatsApp",
    },
  ];

  return (
    <div className="fixed bottom-24 left-4 z-50">
      <div className="flex flex-col items-start gap-2 md:gap-3">
        {buttons.map((button, index) => (
          <motion.div
            key={button.label}
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 1.5, type: "spring", stiffness: 200 }}
            onMouseEnter={() => setHoveredButton(button.label)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            {/* Tooltip on the RIGHT side */}
            <AnimatePresence>
              {hoveredButton === button.label && (
                <motion.div
                  initial={{ opacity: 0, x: 10, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.9 }}
                  className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap pointer-events-none"
                >
                  {button.tooltip}
                  <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.a
              href={button.href}
              target={button.target}
              rel={button.rel}
              aria-label={button.aria}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className={`p-2.5 md:p-3 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex justify-center items-center ${button.bgColor} ${button.hoverColor}`}
              >
                {button.icon}
              </div>
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default FloatingButtons;
