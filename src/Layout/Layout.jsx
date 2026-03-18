import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import WhatsAppPopup from "../Component/ScrollToTop/WhatsAppPopup";
import ScrollToTop from "../Component/ScrollToTop/ScrollToTop";
import FloatingButtons from "../Component/FloatingButtons/FloatingButtons";
import { useSchoolSEO } from "../../hooks/useSEO";

function Layout() {
  const { pathname } = useLocation();
  useSchoolSEO(pathname);

  return (
    <div>
      <ScrollToTop/>
      <Navbar />
      <WhatsAppPopup />
      <FloatingButtons />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
