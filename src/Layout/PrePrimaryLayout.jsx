import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import PrePrimaryNavbar from "../Component/Navbar/PrePrimaryNavbar";
import PrePrimaryFooter from "../Component/Footer/PrePrimaryFooter";
import ScrollToTop from "../Component/ScrollToTop/ScrollToTop";
import FloatingButtons from "../Component/FloatingButtons/FloatingButtons";
import { useSchoolSEO } from "../../hooks/useSEO";

const PrePrimaryLayout = () => {
  const { pathname } = useLocation();
  useSchoolSEO(pathname);

  return (
    <>
      <ScrollToTop />
      <PrePrimaryNavbar />
      <FloatingButtons />
      <main className="pre-primary-layout">
        <Outlet />
      </main>
      <PrePrimaryFooter />
    </>
  );
};

export default PrePrimaryLayout;